let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Carmen.mp3'
conn.sendFile(m.chat, vn, 'Carmen.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /carmen|Carmen/
handler.command = new RegExp
module.exports = handler
