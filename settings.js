/* UP BY LEXZYMARKET
https://whatsapp.com/channel/0029VbB2wFrI1rcovTbVQw16 
   JANGAN LUPA JOIN ALL SALURAN LEXZY & DEVELOPER //
   Developer: 
   - Skyzopedia (wa.me/6283164464290)
   Follow Channel Developer:
   - https://whatsapp.com/channel/0029VbBjJiH6LwHpPjYCZ334
*/


const chalk = require("chalk");
const fs = require("fs");

// SETING OWNER //
global.owner = "6289649810140"
global.namaOwner = "Lexzymarket"
global.thumbnail = "https://files.catbox.moe/f9ar3y.jpg"
global.title = "Pushkontak Lexzy - V3"
global.linkChannel = "https://whatsapp.com/channel/0029VbB2wFrI1rcovTbVQw16"
global.linkGrup = "https://chat.whatsapp.com/J5YOSY7WgtVJuVB9Jqvl6c?mode=ac_t"
global.dana = "0856242937893"
global.ovo = "Tidak tersedia"
global.gopay = "Tidak tersedia"
global.qris = "https://files.catbox.moe/shtxdh.jpg"
// JEDA PUSH BOSS //
global.JedaPushkontak = 1500 // 1000 = 1detik
global.JedaJpm = 3000  // 1000 = 1detik
// CPANEL BOSS //
global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.loc = "1" // Isi id location
global.domain = "https://server.ricotasya.my.id"
global.apikey = "ptla_xZZxSITraBdGqPT0Ge4nRbh3HyLOZW9yX0oDM82J3" // Isi api ptla
global.capikey = "ptlc_TroIQEI72IEJRtMD2ZomZOw1COeoi0ufEyWSWedle" // Isi api ptlc

global.mess = {
owner: "Fitur ini hanya untuk ownerbot.", 
group: "Fitur ini hanya dapat digunakan ketika bot berada di dalam grup.", 
private: "Fitur ini hanya dapat digunakan ketika bot berada di private chat.", 
admin: "Fitur ini hanya dapat digunakan admin grup.", 
botadmin: "Fitur ini hanya dapat digunakan ketika bot menjadi admin grup.", 
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blue(">> Update File :"), chalk.black.bgWhite(`${__filename}`))
delete require.cache[file]
require(file)
})
