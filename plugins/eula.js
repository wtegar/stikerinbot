let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/wtegar/testing/main/eula.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Random eula', '© ollie', 'Get Again', '/eula', m)
}
handler.command = /^(eula)$/i
handler.tags = ['anime']
handler.help = ['eula']
module.exports = handler
