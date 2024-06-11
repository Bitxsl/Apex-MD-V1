const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94775686166'
global.mongodb = process.env.MONGODB_URI || "mongodb://u67wtnui9m87lq4yhmvv:tpelVygzO9NWafGwF0D@bmrkwjjqyq2xfesqxn7z-mongodb.services.clever-cloud.com:2052/bmrkwjjqyq2xfesqxn7z"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/bitx/apex-mdv1'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '775686166'
global.devs = '775686166';
global.website = '' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/55435b6fa0563204b7b5a.jpg'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "IZUKU;;; eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUg2TlBoWjhqNlZWdW55NXM2ZVFKRWVLa0ozdWpMR0dJbWRmd0FUQVgyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3l5UFcrQTF5TUxYblFQUlRxMERmMUM3RTJLSmxXd3JlRGFjRldLLzFUaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJT2ZHNHlRSTNmNmlxRzgwcS9zL2YvY3RGNVNUZWFOYnRabXN3elVNV1hNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpbVhmNU5sQVRQdVR5RXRGa1lkblgwbWdJUUVWLzEwZ2lkNlVoZ3FkRFNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFKTldsdU5JQkowTGlUYzQ3UzdjOExLVWk5MTVZYmJYYjlWQThrVWI5V1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlcwdHprZ3RKWXZDaVh2L3dJRFNodlNDWVo2TmpNMTYrcGpmTjdseU9SQWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU41dDZKNUJySlZSSURIN1hnT2ZlWjZiUzUwMlovd0phVmdUV2xTU3lHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVFCbVF3UU1jQXI5bXFNcHo4a1VDWmVNb1VmZFdxalIwT0ZDUjgzSmpVZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNTc3l1Q0RhQ2VvNnllQVhFZnBRUVBmWUxTUlNVcWpSQ3NMcC8wUkE0dkNhZXNTczJLaGJQSzc0RlM2TTl5dzcwYlV1S3RYS3oxTUlUSVpXQnhCN2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQsImFkdlNlY3JldEtleSI6Ink2NVdoNVZoVExVU2h1Qnlwa242Qm1qSTgrYWZycU05NUhGd0NjTURCNFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjBkOGcwb2RZU3hpTEp1Yl9PQi1WdUEiLCJwaG9uZUlkIjoiY2MwYTE2YzctOGU4Ni00ODUxLTg0YzUtZjYzODA1YWRlZjI5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFzWXp3V01VUzdyU1JaMjQ4OWFlR1VmbVVOVT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVRtcU9KcEE0cWNac3gyZmZmei9PY21rRjRFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkNsM09ZQkVKUDdtN01HR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVnIzK25FdEpMRSs2UklhZlF0VmN2Y3ZOUGNHU0ZRVGVyeEozMGJnMGF5UT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRFJJQmVyMG40ZndJd2N0VUdFNm1jUTJrc01FbllDMmZrR2NuRE1XZ2J5YTd1MTN4Y1NoYnB3dVNTcUtaSEhPWmYycE5OVldYMXVrNlNWWm9VQmdLQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IkdUVVE0TFRidWxlaXBRc0hwUkFCc2IrL01WTDh3ajZQQm8zME5zbnd6b3Z4YmdSdUtZUmFjWTUwTk9sejFaS0dHQWhWamNxbmNlQjZWTXh3cHdsU2hBPT0ifSwibWUiOnsiaWQiOiI5NDc3NTY4NjE2Njo1MUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3NTY4NjE2Njo1MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWYTkvcHhMU1N4UHVrU0duMExWWEwzTHpUM0JraFVFM3E4U2Q5RzROR3NrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4MDI1NjIyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUY5VyJ9",
  botname:   process.env.BOT_NAME === undefined ? 'Apex md' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Bitx ' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'excel' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'IZUKU-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? false : process.env.TYPING,
  autosendstatus:  process.env.STATUS_SENDER === undefined ? false : process.env.STATUS_SENDER,
anticall:  process.env.ANTI_CALL === undefined ? false : process.env.ANTI_CALL,
recordingpresence:  process.env.RECORDING === undefined ? false : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? "╭──────────────╮
       𝗔𝗣𝗣𝗘𝗫 𝗠𝗗 𝗕𝗢𝗧 
╰──────────────╯

╭──────────────────
│Hello there I am Online !  ࿐
│*🧑‍💻 Devoloper  : 𝗕𝗜𝗧𝗫

│*🧬 Version :* 2.0

│*🗃️ Public Group :* https://chat.whatsapp.com/CwKotDYmATM4S3XwZwdTSJ 
╰──────────────────

ꜱᴇɴᴅ ɪᴛ ɴᴏᴡ
☑️ *𝙱𝙾𝚃 𝙾𝙽𝙻𝙸𝙽𝙴= .𝚊𝚕𝚒𝚟𝚎*
☑️ *𝙱𝙾𝚃 𝙼𝙴𝙽𝚄= .𝚖𝚎𝚗𝚞*

*►𝗕ץ ᳆⃞⃚៚▱𝘽𝙄𝙏 𝙭ᵀᴹᑥש* 

  • - - - - - - ☆- - - - - - • 

 ♡ ㅤ      ❍ㅤ        ⎙ㅤ    ⌲ 
 ˡᶦᵏᵉ     ᶜᵒᵐᵐᵉⁿᵗ     ˢᵃᵛᵉ     ˢʰᵃʳᵉ
 ●━━━━━━━━━●━━━━━●
   ⇆   ◁ㅤㅤ❚❚ㅤㅤ▷      ↻
                                  ✯ 


>  © 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ᳆⃞⃚🇱🇰ʀͥᴇᷧᴀͫʟ⃟  𝙰𝙿𝙴𝚇 -𝚖𝚍 " : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'IZUKU',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
