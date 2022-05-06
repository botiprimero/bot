let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Hermosa.mp3'
conn.sendFile(m.chat, vn, 'Hermosa.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /hermosa|Hermosa/
handler.command = new RegExp
module.exports = handler
