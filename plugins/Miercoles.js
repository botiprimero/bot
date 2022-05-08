let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Miercoles.mp3'
conn.sendFile(m.chat, vn, 'Miercoles.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /miercoles|miércoles|Miercoles|Miércoles/
handler.command = new RegExp
module.exports = handler
