let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Daiski.mp3'
conn.sendFile(m.chat, vn, 'Daiski.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /daiski|Daiski/
handler.command = new RegExp
module.exports = handler
