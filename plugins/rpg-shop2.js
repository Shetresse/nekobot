const xpperlimit = 330
let handler = async (m, { conn, command, args, usedPrefix }) => {
  let count = command.replace(/^buy2/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].money >= xpperlimit * count) {
    global.db.data.users[m.sender].money -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    //conn.reply(m.chat, `
    let gata = `
╭━━〔 *DATOS DE COMPRA* 〕━━⬣
┃ *Compra Efectuada* : +${count} 💎 
┃ *Ha Gastado* :  -${xpperlimit * count} 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎
╰━━━━━〔 *𓃠 ${vs}* 〕━━━━⬣`.trim()
    
await conn.sendHydrated(m.chat, gata, wm, null, md, '13', null, null, [
['💵 𝘾𝙤𝙢𝙥𝙧𝙖𝙧 𝙓10', '.buy2 10'],
['💸 𝘾𝙤𝙢𝙥𝙧𝙖𝙧 𝙓20', '.buy2 20'],
['⚡ 𝘾𝙤𝙢𝙥𝙧𝙖𝙧 𝙘𝙤𝙣 𝙀𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖', '/buy']
], m,)
    
  } else //conn.reply(m.chat, `❎ Lo siento, no tienes suficientes *XP* para comprar *${count}* Diamantes💎`, m)

], m,)
}
handler.help = ['Buy', 'Buyall']
handler.tags = ['xp']
handler.command = ['buy2', 'buyall2'] 

handler.disabled = false

export default handler
