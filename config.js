const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348134237510";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_17_11_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDYsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA4MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTksXG4gICAgICAgIDczLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyLFxuICAgICAgICA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDc0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI2LFxuICAgICAgICA0NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzRTEwZ05zc1NUVVZQNzVCbXF1VkZ4REhFam1tdEpuOHhtTUdrRlc1MU9FPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEbjYyNDlHOVFpU2JUVl9tY3kzSXFRXCIsXG4gIFwicGhvbmVJZFwiOiBcImYxOWM5NDg2LTg3NmItNDA2Ny1hMDBjLWMzNThjZTg1NTk5OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODAsXG4gICAgICAxNjUsXG4gICAgICA5MixcbiAgICAgIDEyNyxcbiAgICAgIDI1LFxuICAgICAgNjksXG4gICAgICAzMSxcbiAgICAgIDIyMCxcbiAgICAgIDIyNCxcbiAgICAgIDI0MSxcbiAgICAgIDM1LFxuICAgICAgMTM4LFxuICAgICAgMTk2LFxuICAgICAgODcsXG4gICAgICAxMCxcbiAgICAgIDExMSxcbiAgICAgIDEzMSxcbiAgICAgIDcsXG4gICAgICAxMTgsXG4gICAgICAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OSxcbiAgICAgIDI1MCxcbiAgICAgIDQsXG4gICAgICAzMyxcbiAgICAgIDE5MSxcbiAgICAgIDE4OSxcbiAgICAgIDE2OSxcbiAgICAgIDkxLFxuICAgICAgMTY1LFxuICAgICAgMjI3LFxuICAgICAgMTcwLFxuICAgICAgMTM2LFxuICAgICAgMTkzLFxuICAgICAgMTU5LFxuICAgICAgMTEwLFxuICAgICAgMjEwLFxuICAgICAgMTI3LFxuICAgICAgMjAyLFxuICAgICAgMjE0LFxuICAgICAgMTY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjExOUtDNk5WXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM0MjM3NTEwOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBTUVFUkEnUyBLSVRDSEVOIEFORCBNT1JFXCIsXG4gICAgXCJsaWRcIjogXCIyMDM0NDg2MjQ2MTk3MDQ6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNONjB2TEVDRUlLRWo3b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJPQnFaT29vZHJ0YjJMSGNzQ0FWS1FjbXgvWkNRb0J3YlhJQm85Zit3aWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicWlnbXhWd3F1WVJqM3MzNUVNdlBXWmg3QW5NWnE3ZVJJZy9VNnl3TEZOWU1zYmhMYm4rTkIxZjlhV2dLV1dyeTVZSjkxdEJtYWcvNjl6S1JKL016QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicDZaMUpEclIzSitUbGRqOUtUK1JOTURvbVRSTmtCM2kyQlBLVGRaMFE1U012ZUE0dUZaUWZVYmJyT0dGUWZ3QVYyZk1ZTHlRa2Mvd0lySVpBeGJ1Z3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNDIzNzUxMDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI0OTM4MjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHUUVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdRRS5qc29uIjogIntcImtleURhdGFcIjpcIkxiYWVaTTlScGtZOWd2L0lsVDg3bFdUYk9nVDR0SDhwZE5zSm0rNWFkMmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjQwNjIxMTQ5LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMyNDkzNTc5NDgyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
