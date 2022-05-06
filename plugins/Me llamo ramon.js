let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Me llamo ramon.mp3'
conn.sendFile(m.chat, vn, 'Me llamo ramon.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /me llamo ramon|me llamo Ramon|Me llamo Ramon|Me llamo ramon|me llamo ramón|Me llamo Ramón/
handler.command = new RegExp
module.exports = handler
