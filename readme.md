# KatBot MTProto-nodejs v0.1 (ALPHA TESTING)

## About
KatBot MTProto-nodejs runs on the **telegram-mtproto** library with **mtproto-storage-fs**.
https://github.com/zerobias/telegram-mtproto
https://www.npmjs.com/package/mtproto-storage-fs

## Features
- Connects with Telegram's MTProto server and saves client session
- getUsers.js
  - Runs https://github.com/wfjsw/telegram-core-docs/blob/master/method/channels.getParticipants.md
  - Returns https://github.com/wfjsw/telegram-core-docs/blob/master/type/channels.ChannelParticipants.md

## Requirements
npm install --save telegram-mtproto@2.2.8
npm install --save mtproto-storage-fs

## Documentation
- The api_id and api_hash values can be obtained here: https://my.telegram.org/
  - where_to_get_app_config.png
- A channel's CHANNEL_ID and ACCESS_HASH Can be obtained from https://tjhorner.com/webogram/ or https://fabianpastor.github.io/webogram
  - where_to_get_chat_info.png

## Example Output
A vector of https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/user.md

## To do
- Return a complete user vector of a channel
- Parse the result