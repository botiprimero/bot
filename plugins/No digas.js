let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/No digas.mp3'
conn.sendFile(m.chat, vn, 'No digas.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /no digas|No digas/
handler.command = new RegExp
module.exports = handler
