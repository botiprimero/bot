let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Domingo.mp3'
conn.sendFile(m.chat, vn, 'Domingo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /domingo|Domingo/
handler.command = new RegExp
module.exports = handler
