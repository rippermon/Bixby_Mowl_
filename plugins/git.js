const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://telegra.ph/file/9d06d2921b9f4ae90527b.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bot Name: Bixby*

*Creator number : wa.me/919446072492?text=Hii%20Ziyan%20Ser.%20*

 *To check update .update   To update Bot .update now*

 *Bot making video : https://youtube.com/channel/UCGi-AvmiPaFczO44NkIkP9A*
     
 *Instagram id: https://instagram.com/__ziyxn_?utm_medium=copy_link

 *Yt_PASSWORD: _________(password on this video watch it full)*

 *githublink : https://github.com/RIPPER-SER/_Bixby_Mowl_*

 *Hope You Guys Enjoyed Bixby Mowl Wa bot thenku🥰*
`}) 

}));
