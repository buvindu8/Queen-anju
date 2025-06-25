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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZnbGpEWmRxYlRPeXNzSnVQTHg1b3JRc1FtWnhBZDBKb1lsdGVNTEZFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidC9mRHhjRGIvM28vUWxKQ1JyL1JtdWV3UllhMC9QaVVVVmFpNVpYT00wTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTlBhdTgrRmRjQ0lQL1Y2bEhTSS9Kbjg2M2V1bXBiT0VDRmM0dy92dG5JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSlRZMzZPV0tHSVlqWXVrWStuaEE1a2RKa09Ra1JrUW9ML3FnMHVvSlNNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllMMDZHL0JOZ0FKcWY4K2dzNE1RSUI3UVN2MklGei9SOWNxMTRzV1h0V2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFRRi83dnA4VTNyK1dCRkQ1Nk4wOG5pdWNWYWxpeHRVeE4ySndWUS9xems9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0EvZUw0NU5ENDBrTUZWd05zK2xaSDdNV1RjQUxWKzMvdjQvVm1hbHVYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2pPUi9zRTJ5a3JPdFprdzh4aFRKVjd6RU5MY25DNTFWbk9ySk5BWThDZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVSdkFKQW1SNjlIU2daQ0ZHM3lzQzhHazRXVXhPbW5KQ0M4Y3hRWjVNV3Nhd29oa0VkWDhpNU1VelpzSm1UQ1JCaFkyTjlLeGRNVmJEa1hmT1o3MEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoiUXJ4U1dxKzZNVlRSUjkweUQ1ZEY3NWo3aksrNjc5NC9waDZPSWIwKzJnaz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQnp4bHp4ZEdUZU80cFlCdkNRSi1rQSIsInBob25lSWQiOiJmZjYwNWQyMS1mMzRiLTQ3NzItYmQ5ZS03NmRmM2MyNGQ0ZmYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVhUUkVIODZ6NDhZRllxc3J3eHRDbXZxS0c0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN6VUFjZTFBZm1IdmI2eHJCcWhqVTVIbkhCND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI4SlJSUTIyRyIsIm1lIjp7ImlkIjoiOTQ3ODg3NjgyMzk6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2l0aHUgRmFzaGlvbiIsImxpZCI6IjIzNTE4NDQ5MDMxNTk2NDoxMUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lDZzExVVE4b2Z3d2dZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkVDSXo5aWV1TWRsUDc0d3czMTFnYzdXbG9MQ0V3R2lNazd5WnB1YTNIa3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilh1cVhtN2RyMXVuVFlYVkNHSHJSRnUzY1d5bExTaFBJdjN4WW95KzlVN3lqcHpxRWczSUNES2k3VDIycFlJSzR3UFZHNHo4RWlUZHVJVkNLNkt5MUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvYWp2bEQzWGVKSzlZYXNGZHRUS3Zsd3VXT3Z3V05DZ2E2TmlVb3JOZ2w3Z2NvTjIwZjU2SUhoSW9PcEFhZDJVVkswT3doT2k0SkkwZDRUalBjck5EQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg4NzY4MjM5OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJBaU0vWW5yakhaVCsrTU1OOWRZSE8xcGFDd2hNQm9qSk84bWFibXR4NUwifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDg2MDc5OSwibGFzdFByb3BIYXNoIjoiMlY3N3FVIn0=",
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
