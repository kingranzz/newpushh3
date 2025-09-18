// SC PUSH BY LyynCode & SKYZOPEDIA //
// RECODE BY LyynCode t.me/LyynNotYourGod
// BASE DEVELOPERS SKYZO t.me/@Xskycode //
/* # Penting
   Jangan hapus credits atau nama developer
   hargai pembuat script ini!*/


const chalk = require("chalk");
const fs = require("fs");

global.owner = "6282393734303"
global.namaOwner = "RanzCodeBOT"
global.mode_public = true
global.versiBot = "RannCodeBOT"
global.pairing = true

global.linkChannel = "https://whatsapp.com/channel/"
global.idChannel = "12036342124265804@newsletter"
global.linkGrup = "https://chat.whatsapp.com/"
global.thumbnail = "https://img1.pixhost.to/images/8409/637175004_zakkistore.jpg" // THUMB

global.dana = "087780435172"
global.ovo = "Tidak tersedia"
global.gopay = "087780435172"
global.qris = "https://img1.pixhost.to/images/8409/637174886_zakkistore.jpg" // UBAH AJA

global.JedaPushkontak = 5000
global.JedaJpm = 5000

global.egg = "15" // Isi id egg
global.nestid = "6" // Isi id nest
global.loc = "1" // Isi id location
global.domain = "https://produk.Hanzo.my.id"
global.apikey = "ptla_xZZxSITraBdGqPT0Ge4nRb3HxLOZW9yX0oDM82J3" // Isi api ptla
global.capikey = "ptlc_TroIQEI72IEJRtMD2ZomZ1CV7Oeoi0ufEyWSWedle" // Isi api ptlc


let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blue(">> Update File :"), chalk.black.bgWhite(`${__filename}`))
delete require.cache[file]
require(file)
})
