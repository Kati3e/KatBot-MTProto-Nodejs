const { MTProto } = require('telegram-mtproto');
const { Storage } = require('mtproto-storage-fs');
const readline = require('readline');

// Supply a phone number with country code
// The api_id and api_hash values can be obtained here: 
//    https://my.telegram.org/
// The channel_id and access_hash values can be obtained here:
//    https://tjhorner.com/webogram/
//      or
//    https://fabianpastor.github.io/webogram
const config = {
  "phone_number": "+10000000000",
  "api_id": 000000,
  "api_hash": "xxxxxxxxxxxxxxxxxxxxxxxxxx",
  "channel_id": 1000000,
  "access_hash": '0000000000000000000'
};

const app = {
  storage: new Storage('./storage.json')
};

const phone = {
  num: config.phone_number
};

const api = {
  layer         : 57,
  initConnection: 0x69796de9,
  api_id        : config.api_id
};

const inputChannel = {
  _: 'inputChannel',
  channel_id: config.channel_id,
  access_hash: config.access_hash
};

const server = {
  dev: false
};

const client  = MTProto({ server, api, app });

// This function will stop execution of the program until you enter the code
// that is sent via SMS or Telegram.
const askForCode = () => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input : process.stdin,
      output: process.stdout
    });

    rl.question('Please enter passcode for ' + phone.num + ':\n', (num) => {
      rl.close();
      resolve(num);
    });
  })
};

// First you will receive a code via SMS or Telegram, which you have to enter
// directly in the command line. If you entered the correct code, you will be
// logged in and the credentials are saved.
const login = async (client, phone) => {
  const { phone_code_hash } = await client('auth.sendCode', {
    phone_number  : phone.num,
    current_number: false,
    api_id        : config.api_id,
    api_hash      : config.api_hash
  });

  const phone_code = await askForCode();
  console.log(`Your code: ${phone_code}`);

  const { user } = await client('auth.signIn', {
    phone_number   : phone.num,
    phone_code_hash: phone_code_hash,
    phone_code     : phone_code
  });

  console.log('signed as ', user);
};

// [ALPHA] Outputs a limit of 10 channelParticipantsRecent
//    https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelParticipantsRecent.md
const getUsers = async () => {
  const users = await client('channels.getParticipants', {
    channel: inputChannel,
    filter: { _: 'channelParticipantsRecent' },
    offset: '',
    limit: 10,
  });
  console.log('users', users);
};

// First check if we are already signed in (if credentials are stored). If we
// are logged in, execution continues, otherwise the login process begins.
(async function() {
    if (!(await app.storage.get('signedin'))) {
        console.log('Not signed in');
        await login(client, phone).catch(console.error);
        console.log('Signed in successfully');
        app.storage.set('signedin', true);
	} else {
        console.log('Already signed in');
    }
    getUsers();
})();