const similarity = require('similarity')
const threshold = 0.72

let handler = m => m

handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*hint/i.test(m.quoted.contentText)) return !0
  this.tebakgambar = this.tebakgambar ? this.tebakgambar : {}
  if (!(id in this.tebakgambar)) return m.reply('Tebak Gambar telah berakhir')
  if (m.quoted.id == this.tebakgambar[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tebakgambar[id][1]))
    if (['.hint', ''].includes(m.text)) return !0
    if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
      db.data.users[m.sender].exp += this.tebakgambar[id][2]
      await this.sendButton(m.chat, benar + ` +${this.tebakgambar[id][2]} XP`, '© Ollie', 'Tebak Gambar', '.tebakgambar', m)
      clearTimeout(this.tebakgambar[id][3])
      delete this.tebakgambar[id]
    } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(dikit)
    else m.reply(salah)
  }
  return !0
}
module.exports = handler
