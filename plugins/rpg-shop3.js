const diamantetk = 25
let handler = async (m, { conn, command, args, usedPrefix }) => {
  let count = command.replace(/^buy3/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].limit / diamantetk) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].limit >= diamantetk * count) {
    global.db.data.users[m.sender].limit -= diamantetk * count
    global.db.data.users[m.sender].joincount += count
    //conn.reply(m.chat, `
    let gata = `
╭━━〔 *DATOS DE COMPRA* 〕━━⬣
┃ *Compra Efectuada* : +${count} 𝙏𝙊𝙆𝙀𝙉(𝙎) 🪙 
┃ *Ha Gastado* :  -${diamantetk * count} 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎 💎
╰━━━━━〔 *𓃠 ${vs}* 〕━━━━⬣`.trim()
    
await conn.sendHydrated(m.chat, gata, wm, null, md, '13', null, null, [
['💎 𝘾𝙤𝙢𝙥𝙧𝙖𝙧 𝙓50', '.buy3 50'],
['💎 𝘾𝙤𝙢𝙥𝙧𝙖𝙧 𝙓100', '.buy3 100'],
['💎 𝘾𝙤𝙢𝙥𝙧𝙖 𝘼𝙗𝙨𝙤𝙡𝙪𝙩𝙖', '/buyall3']
], m,)
    
  } else //conn.reply(m.chat, `❎ Lo siento, no tienes suficientes *XP* para comprar *${count}* Diamantes💎`, m)

], m,)
}
handler.help = ['Buy', 'Buyall']
handler.tags = ['xp']
handler.command = ['buy3', 'buyall3'] 

handler.disabled = false

export default handler
