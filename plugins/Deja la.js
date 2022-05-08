let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Deja la.mp3'
conn.sendFile(m.chat, vn, 'Deja la.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /deja la paja|Deja la paja/
handler.command = new RegExp
module.exports = handler
