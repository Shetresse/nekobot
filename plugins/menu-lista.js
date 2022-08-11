import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
//let userr = global.db.data.users[m.sender]
//userr.registered = false
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)
const sections = [
{
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀𝙎𝙋𝙇𝙀𝙂𝘼𝘽𝙇𝙀 | 𝘿𝙍𝙊𝙋-𝘿𝙊𝙒𝙉 𝙇𝙄𝙎𝙏`,
rows: [

      {title: "🌀 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 | 𝙁𝙐𝙇𝙇 𝙈𝙀𝙉𝙐 🌀", description: null, rowId: `${usedPrefix}allmenu`},
      {title: "🏆 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘾𝙇𝘼𝙎𝙄𝙁𝙄𝘾𝘼𝙏𝙊𝙍𝙄𝘼 🏆", description: null, rowId: `${usedPrefix}top`},
      {title: "🎡 𝙅𝙐𝙀𝙂𝙊𝙎 𝘿𝙄𝙉𝘼𝙈𝙄𝘾𝙊𝙎 | 𝙂𝘼𝙈𝙀𝙎 🎡", description: null, rowId: `${usedPrefix}juegosmenu`},
      {title: "🔊 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊𝙎 | 𝘼𝙐𝘿𝙄𝙊𝙎 🔊", description: null, rowId: `${usedPrefix}audios`},
      {title: "🧰 𝙈𝙀𝙉𝙐 𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝘿𝙊𝙍 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊 🧰", description: null, rowId: `${usedPrefix}audioefectomenu`},
      {title: "⚙️ 𝘾𝙀𝙉𝙏𝙍𝙊 𝘿𝙀 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄𝙊𝙉 ⚙️", description: null, rowId: `${usedPrefix}on`}, 
      {title: "🎈 𝙈𝙀𝙉𝙐 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙔 𝙁𝙄𝙇𝙏𝙍𝙊𝙎 🎈", description: null, rowId: `${usedPrefix}stickermenu`},
      {title: "🛰️ 𝙈𝙀𝙉𝙐 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍 | 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙀𝙍 🛰️", description: null, rowId: `${usedPrefix}convertidormenu`},
      {title: "✨ 𝙈𝙀𝙉𝙐 𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝙔 𝙇𝙊𝙂𝙊𝙎 ✨", description: null, rowId: `${usedPrefix}makermenu`}, 
      {title: "📲 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 | 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐 📲", description: null, rowId: `${usedPrefix}descargasmenu`},
      {title: "🔍 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘽𝙐𝙎𝙌𝙐𝙀𝘿𝘼𝙎 | 𝙎𝙀𝘼𝙍𝘾𝙃 𝙈𝙀𝙉𝙐 🔍", description: null, rowId: `${usedPrefix}buscarmenu`},
      {title: "⛩️ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙈𝙀 | 𝘼𝙉𝙄𝙈𝙀 ⛩️", description: null, rowId: `${usedPrefix}randommenu`},
      {title: "⚗️ 𝙈𝙀𝙉𝙐 𝙍𝙋𝙂 ⚗️", description: null, rowId: `${usedPrefix}rpgmenu`},

      

]}, ]
 
