let handler = async (m, { usedPrefix, conn}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
await m.reply(`
╭━〔 👝 *CARTERA | WALLET* 〕━⬣
┃ ${name} 𝙀𝙣 𝙨𝙪 𝘾𝙖𝙧𝙩𝙚𝙧𝙖 𝙩𝙞𝙚𝙣𝙚...
┃ *${global.db.data.users[who].limit} Diamante(s)* 💎
┃ *${global.db.data.users[who].money} Coin(s)* 🐈
┃ *${global.db.data.users[who].exp} EXP* ⚡
┃ *${global.db.data.users[who].joincount} Token(s)* 🪙
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙄𝙣 𝙮𝙤𝙪𝙧 𝙬𝙖𝙡𝙡𝙚𝙩 𝙮𝙤𝙪 𝙝𝙖𝙫𝙚...
┃ *${global.db.data.users[who].limit} Diamond(s)* 💎
┃ *${global.db.data.users[who].money} Coin(s)* 🐈
┃ *${global.db.data.users[who].joincount} Token(s)* 🪙
╰━━━━〔 *𓃠 ${vs}* 〕━━━⬣`)

await conn.sendHydrated(m.chat, wm, `Puede comprar más recuersos económicos usando estos comandos\nYou can buy more cheap resources using these commands\n\nCOMPRAR DIAMANTES CON EXP\n${usedPrefix}buy cantidad\n${usedPrefix}buyall cantidad\n\nCOMPRAR DIAMANTES CON GATACOINS\n${usedPrefix}buy2 cantidad\n${usedPrefix}buyall2 cantidad\n\nCOMPRAR TOKENS CON DIAMANTES\n${usedPrefix}buy3 cantidad\n${usedPrefix}buyall3 cantidad`, null,'13', null, null, [

], m,)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal2', 'cartera', 'wallet', 'cartera2', 'balance2'] 
export default handler
