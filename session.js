//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU5jNERubFhmdVRTOWFwdmpOSVBKQmZPaG5JajZ5bHdTY3hQMHlaS1lFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXp2KytRVmNWR0Y2bkhJYlh5ZXMyVngxMG43VHlrQm44eXRvMmFsdlJBcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTC9zK0N0L3AzRG00cEd3bUxQOXFWZE1seTFieEl6WVI5TjU2Y20yRDNzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwdlBtcHpxTC81RVZBaFQ4Z09uRldYMFhFWGdPbzFXajBHRS9CZTJ5STFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVGd2Y2b2h0MHUrUWR0TzU1bUU2S3hQK05OZ3hRbUxXZThIZXhGd2Vzblk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh2cEw2bUhoanFUV3N0eHdSQTlXcmhyV2E3aWRhN0dRRjF2VHlhVjNJRU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJOY2VNMGhmYTE2eDdLdXYwUzdHSURiUVdrOVBWTEhFZk9yMEZxT1UwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMklVWS95ZGljRnI0NUZlTmpKdjdiMkFqbjNwRklUSkZtWW5zREE4TVQxcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZ1ekQyK0NsbkVCbTQwblB4WjJvOGlNdTlDVHV2N05JRnZlSFp2ZUltazhWZUp3OER3YVhNYTlQeXVlcjBMMWRxK0U3M3dXRXFrT3BSRjhtWDVqSGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiJET0ZIdlFVdGloYVV5U0lUMEVLV0laZnU2RklJTksrY01iT0F5dEQzd0JJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg4NzY4MjM5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc0RTVGN0UyM0FGMThGRjFDOTVBRUZEQkRGNjVDMjJCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA4NjE4MTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg4NzY4MjM5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkJDRkQ2N0FGN0I5RTZDREM3RDk0NTU2NjU0OTFENTZFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA4NjE4MTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkpiUjBnekZ2UTVhOW1ZYXc5eGNyT1EiLCJwaG9uZUlkIjoiYmM4NmZjNjctYjMxOC00YmQyLTkxZjMtN2JhZjBlM2JmYWNjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVDbFpmVGc2VTJqUWFyaU55Ti9TTG8vWUcyST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwTjRTOWdGTkF0eUJCTkY2M1o3a3o2d3Iyems9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSjM2RUhGUDkiLCJtZSI6eyJpZCI6Ijk0Nzg4NzY4MjM5OjEyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNpdGh1IEZhc2hpb24iLCJsaWQiOiIyMzUxODQ0OTAzMTU5NjQ6MTJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJQ2cxMVVRNlkvd3dnWVlBeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFQ0l6OWlldU1kbFA3NHd3MzExZ2M3V2xvTENFd0dpTWs3eVpwdWEzSGtzPSIsImFjY291bnRTaWduYXR1cmUiOiJ4dHZXbTFuZFFWQ0czYUx6dWZMUFNsd2xrMk9hUkp0OGNsZ1VVdm5SQ0JsVXpTTTB0d0pwM0QzaTVMWmtRaWJiN2dPYjlMZHVDeCtvNlozZVZpY3BEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidmRySVJaVFJDWEIrd3RXOXlJWWhpU0tBSnNoTVpsT3UwVFZQZ2V0VmhtWXF4WU9rWXFta2FlZG5Hc2lUeHJaeFlzRzZYTzNXRTBxUzl0dnpkRExnaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4ODc2ODIzOToxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSQWlNL1lucmpIWlQrK01NTjlkWUhPMXBhQ3doTUJvakpPOG1hYm10eDVMIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA4NjE4MTQsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS0o1In0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0788768239",
  PASSWORD: 
    process.env.PASSWORD || "86iresha86",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
