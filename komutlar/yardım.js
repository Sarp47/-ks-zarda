const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var PREFIX = ayarlar.prefix
const db = require ('quick.db')
exports.run = async (client, message, args) => {
const murat = new Discord.MessageEmbed()
.setColor('ORANGE')
.setTitle('» Komutlar')
.setTimestamp(30000)
.addField(`• ${PREFIX}ekle **<botID> <prefix>**`,`Bot başvurursunuz.`)
.addField(`• ${PREFIX}yetkili`,`Yetkili yardm menüsünü atar.`)
.setFooter('')
.setTimestamp()
message.channel.send(murat)
};

//MRT

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y','yardim','komutlar'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};
