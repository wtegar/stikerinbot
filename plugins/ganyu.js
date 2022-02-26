let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/tegaro/uwu/main/ganyu.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Ganyu mpshhh', '© ollie', 'Get Again', '/ganyu', m)
}
handler.command = /^(ganyu)$/i
handler.tags = ['anime']
handler.help = ['ganyu']
module.exports = handler
