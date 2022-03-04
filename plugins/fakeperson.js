/* Copyright (C) 2021 MIDLAJ.

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

MIDLAJ

*/
const Asena = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const axios = require('axios');

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'fakeperson', fromMe: true, desc: 'Get random fake person image'}, (async (message, match) => {


    var respoimage = "https://thispersondoesnotexist.com/image";

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '©BIXBY'})

    }));

}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'fakeperson', fromMe: false, desc:'Get random fake person image'}, (async (message, match) => {


    var respoimage = "https://thispersondoesnotexist.com/image";

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '©BIXBY'})

    }));

}
