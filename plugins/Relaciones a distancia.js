let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Relaciones a distancia.mp3'
conn.sendFile(m.chat, vn, 'Relaciones a distancia.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /relaciones a distancia|Relaciones a distancia/
handler.command = new RegExp
module.exports = handler
