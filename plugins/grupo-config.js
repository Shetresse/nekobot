let handler = async (m, { conn, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg'  
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `
${mg}*╭━[ ${wm} ]━⬣*
*┃➥ ${usedPrefix + command} abrir*
*┃➥ ${usedPrefix + command} cerrar*
*╰━━━━━[ 𓃠 ${vs} ]━━━━━⬣*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
  
if (isClose === 'not_announcement'){
conn.sendButton(m.chat, `${eg}𝙔𝘼 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙏𝙊𝘿𝙊𝙎 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊!!`, `𝙂𝙍𝙐𝙋𝙊 𝘼𝘽𝙄𝙀𝙍𝙏𝙊\n${wm}`,, m)
}
  
if (isClose === 'announcement'){
//m.reply(`${eg}*𝙂𝙍𝙐𝙋𝙊 𝘾𝙀𝙍𝙍𝘼𝘿𝙊*\n𝙎𝙊𝙇𝙊 𝙇𝙊𝙎 𝘼𝘿𝙈𝙄𝙉𝙎 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊`)
conn.sendButton(m.chat, `${eg}𝙎𝙊𝙇𝙊 𝙇𝙊𝙎 𝘼𝘿𝙈𝙄𝙉𝙎 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊!!`, `𝙂𝙍𝙐𝙋𝙊 𝘾𝙀𝙍𝙍𝘼𝘿𝙊\n${wm}`, m)
}  
 }
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true
handler.exp = 200
export default handler
