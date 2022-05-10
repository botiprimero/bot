let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Dime.mp3'
conn.sendFile(m.chat, vn, 'Dime.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /dime|Dime|dimelo|Dimelo|dímelo|Dímelo/
handler.command = new RegExp
module.exports = handler
