let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/tegaro/uwu/main/hutao.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'hutao mpshh', '© ollie', 'Get Again', '/hutao', m)
}
handler.command = /^(hutao)$/i
handler.tags = ['anime']
handler.help = ['hutao']
handler.nsfw = false
module.exports = handler
