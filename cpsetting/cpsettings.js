const fs = require('fs')
const chalk = require('chalk')

global.domain = "https://" // Isi Domain mu, WEBSITE WAJIB ADA SSL
global.apikey = '-' // Isi Apikey Pterodactyl mu
global.capikey = '-' // Isi Apikey Pterodactyl mu
global.creAtor = "6285850539404@s.whatsapp.net"
global.owner = ['6285850539404']
global.ownerNumber = ["6285850539404@s.whatsapp.net"]
global.nomerOwner = "6285850539404"
global.namabotnya = 'Oscarbot'
global.namaownernya = 'Oscarbot'
global.packname = 'Oscarbot'
global.author = 'Tempek'
global.sessionName = 'session'
global.email = 'admin@Jarotr.com' // Ganti dengan emailmu
global.group = 'https://chat.whatsapp.com/'
global.youtube = 'https://youtube.com/'
global.website = 'https://Tempek'
global.github = 'https://github.com/Pann09'
global.nomorowner = 'https://wa.me/6285850539404'
global.region = 'Indonesia'
global.prefa = ['','!','.','#','-','•']
global.krmd = 
{
success: '```Sukses!```',
admin: '```Fitur Khusus Admin Group!!!```',
botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
owner: '```Owner Only Broo...```',
group: '```Fitur Digunakan Hanya Untuk Group!!!```',
private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
error: '```Error Kak, Hubungi owner 6285850539404```',
wait: '```Waittt...```'
}

global.thumb = fs.readFileSync('./js/image/thumb.jpg')
global.imagekir = fs.readFileSync('./js/image/image.jpg')
global.videokir = fs.readFileSync('./js/image/video.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})