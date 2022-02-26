let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/tegaro/uwu/main/raphtalia.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Raphtalia Mpshh', '© ollie', 'Get Again', '/raphtalia', m)
}
handler.command = /^(raphtalia)$/i
handler.tags = ['anime']
handler.help = ['raphtalia']
module.exports = handler
