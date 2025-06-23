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
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEluSHJnYW4vY0tUV1NKSjI2ekhPbkU0S1pYd3pPUzJoOHhZUXRDQXdYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGQzNWFhM1dQcVRhY0ltYy9odWhyYnRxUEhJOVhUZ0RIaXFFZ0xOODd4UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRnl1SUJCTnZhMW5PMXgrRVcwSzNCWjhhb2FQVjdRZ1oxWVdMQlZ5eDBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QUpYczkrSUJFZER0eTlWTnFoM25kbHBwZkFVL0pEK25FL1pBYlZsdmdVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitLZ2N1Yjg4T2JnVnk3RlRseHRmbEtWRE94blVCL1c3TkN4eHRGUzYzWDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9rakJVOEVRYlJEaFNGQmxTQVA4VVhRUEovL3ltUUs3UGlTYVBpWlZaZ2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZrczhxNjZNQ3lsQ3VaNkNGNnB0eS9FUE5obFY2dUcvYTRkV0V0d2VXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0NxaUNqWERRc2VMdGczNElMWGh6ZDl0REpWbFkzeURZN1Z5S3BIcnFCYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFtQnJhaXRueVViUmErc1FYL1NYYkhubjBLWFRtNkkzaUprS2d3aHJDSEdFWVJyTHZvNFRNUmdmaWs2UHNvVEE3YXlkeVBqRmxCMDQzZW1WcUI4S2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODMsImFkdlNlY3JldEtleSI6IlBFUTlJMENHS2tLTXVNR2ZIYXErRGthWlo4by9zNm1uNE1NaXVNUjdLQkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODg3NjgyMzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzQxNEYzOTU1ODRFRTVGMjE5MzNEMjZCNjE3M0YzMDEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDI0NzM5Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODg3NjgyMzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0I3RTQzMDFEQjY1QjMyNEI4MEEyNjg2OEEwNEFFNEEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDI0NzM5Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiRmowT2xvb09TdXl6bzdYUjVmNldKZyIsInBob25lSWQiOiJhYTU1OGUzMy1kMGRjLTQwODgtOWIyYS1lZDMxNGU0YWUwZjgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid21MU3VWYW8zOEF3QVVlcTBTOWR2aVFSSFdjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjEvUDZrWkZrajZFaFdzWGVDY1htYXk0Vmg2Yz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJTTVZKNzVQVCIsIm1lIjp7ImlkIjoiOTQ3ODg3NjgyMzk6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTaXRodSBGYXNoaW9uIiwibGlkIjoiMjM1MTg0NDkwMzE1OTY0OjZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQK2YxMVVRMU0vS3dnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFQ0l6OWlldU1kbFA3NHd3MzExZ2M3V2xvTENFd0dpTWs3eVpwdWEzSGtzPSIsImFjY291bnRTaWduYXR1cmUiOiI4ZkdmbnIrYmFEK2YxUkpiczd3dEo4dEd5L2tFRnZkN3dqeE9vRzFBdlRRMzlBUjdXOTN3Z2p1SEpXYkxKUGhvSjVGbS9QaTVaUS9DeFBOeXU1VENBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSU1mOHova3VIVWZGeWEyMmJmaldUeCs1UmtHTHVYV0htYzlBaUgvdWdyNi9iVHhPRDZIUlJIOU1pc096aEVaUDJudWlHNEpURk9zL2ZoMUpYZ1Zaamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4ODc2ODIzOTo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJBaU0vWW5yakhaVCsrTU1OOWRZSE8xcGFDd2hNQm9qSk84bWFibXR4NUwifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBc0lDUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDI0NzM5MywibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQV0YifQ==",
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
