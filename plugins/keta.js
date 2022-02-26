let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/wtegar/testing/main/keta.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Random keta', '© ollie', 'Get Again', '/keta', m)
}
handler.command = /^(keta)$/i
handler.tags = ['nsfw']
handler.help = ['keta']
handler.nsfw = true

module.exports = handler
