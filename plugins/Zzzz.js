/*
 * ngelarang lu biar g diubah kyknya emg susah ya anjg
 * jadi kalau lu g bsa ngehargain orang
 * setidaknya buat sc ori by gw, trs buat sc lu hasil copas tuh
 * better bgtu dripada nma gw dihapus smua
 * najis 
*/

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hello kak ${ye} Lagi Nyari Sc Ya? 

๐ฎ ๐๐๐๐ ๐๐๐ ๐๐ ๐ ๐๐ ๐๐๐๐

โตอกอโช ๐๐พ๐ ๐๐๐ฑ๐ด : -

_*Esceh*_`
conn.sendBut(m.chat, esce, wm3, 'Thanks', 'thanks', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
