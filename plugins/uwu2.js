let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/uwu2.mp3'
conn.sendFile(m.chat, vn, 'uwu2.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /uwu/
handler.command = new RegExp
module.exports = handler
