let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, API('mel', '/asupan', {}, 'apikey'), 'asupan.mp4', '© Ollie')
}
handler.help = ['asupan']
handler.tags = ['fun']
handler.command = /^(asupan)$/i

module.exports = handler
