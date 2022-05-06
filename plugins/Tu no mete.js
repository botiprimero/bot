let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Tu no mete.mp3'
conn.sendFile(m.chat, vn, 'Tu no mete.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /tu no mete|tú no mete|Tu no mete|Tú no mete/
handler.command = new RegExp
module.exports = handler
