# KatBot MTProto-Nodejs v0.1 (ALPHA TESTING)

## About
KatBot MTProto-Nodejs runs on the [**telegram-mtproto**](https://github.com/zerobias/telegram-mtproto) library with [**mtproto-storage-fs**](https://www.npmjs.com/package/mtproto-storage-fs)


## Features
- Connects with [Telegram's MTProto](https://core.telegram.org/mtproto) server and saves the client session
- getUsers.js
  - Runs [channels.getParticipants](https://github.com/wfjsw/telegram-core-docs/blob/master/method/channels.getParticipants.md)
  - Returns [ChannelParticipants](https://github.com/wfjsw/telegram-core-docs/blob/master/type/channels.ChannelParticipants.md) vector<[user](https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/user.md)>

## Requirements
```
npm install --save telegram-mtproto@2.2.8
npm install --save mtproto-storage-fs
```

## Documentation
- The api_id and api_hash values can be obtained here: 
  - https://my.telegram.org/
    - ![where_to_get_app_config](https://raw.githubusercontent.com/Kati3e/KatBot-MTProto-Nodejs/master/images/where_to_get_app_config.png)  

- The channel_id and access_hash values can be obtained here:
  - https://tjhorner.com/webogram/
    - or
  - https://fabianpastor.github.io/webogram
  - ![where_to_get_chat_info](https://raw.githubusercontent.com/Kati3e/KatBot-MTProto-Nodejs/master/images/where_to_get_chat_info.png)  

## Example Output
A vector of [users](https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/user.md)

## Goal
1. Get full list of users in the channel
2. Find most inactive users so we can kick them
3. Remove bots

## To do
- Return a complete user vector of a channel
- Parse the result
