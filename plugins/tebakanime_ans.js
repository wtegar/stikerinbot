let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 Tebak Judul Anime 」/i.test(m.quoted.text)) return !0
  conn.tebakjudulanim = conn.tebakjudulanim ? conn.tebakjudulanim : {}
  if (!(id in conn.tebakjudulanim)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == conn.tebakjudulanim[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.tebakjudulanim[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
      global.db.data.users[m.sender].exp += conn.tebakjudulanim[id][2]
      m.reply(`*Benar!*\n+XP${conn.tebakjudulanim[id][2]}`)
      clearTimeout(conn.tebakjudulanim[id][3])
      delete conn.tebakjudulanim[id]
    } else if (m.text.toLowerCase().endsWith(json.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
  }
  return !0
}
handler.exp = 0

module.exports = handler
