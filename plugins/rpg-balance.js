let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
await m.reply(`
╭━〔 🔖 *BALANCE* 〕━⬣
┃ *USUARIO(A) | USER*
┃ ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *${global.db.data.users[who].limit} Diamantes* 💎
╰━━━━〔 *𓃠 ${vs}* 〕━━━⬣`)

let d = `
*COMPRAR DIAMANTES CON EXP*
${usedPrefix}buy *cantidad*
${usedPrefix}buyall *cantidad*

*COMPRAR DIAMANTES CON GATACOINS*
${usedPrefix}buy2 *cantidad*
${usedPrefix}buyall2 *cantidad*`

await conn.sendHydrated(m.chat, d, wm, null, md, '13', null, null, [

], m,)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 
export default handler
