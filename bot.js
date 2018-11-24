const Discord = require('discord.js');
const moment = require("moment");  
const fs = require("fs");      
const dateFormat = require('dateformat');
const client = new Discord.Client(); 
const Canvas = require("canvas"); //npm i canvas
const prefix = "-"
let profile = JSON.parse(fs.readFileSync("profile.json", "utf8"))

client.on('ready', () => {
    client.user.setGame('Rezfix. BroadCast |-bc','https://www.twitch.tv/RezfixServer');
      console.log('BroadCast');
      console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
      console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
      console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });

const seender = 'لعمل منشن لمرسل الرساله قم بكتابة {sender} في الرسالة.';
const server = 'لكتابة اسم السيرفر قم بكتابة {server} في الرسالة.';
const user = 'لعمل منشن للشخص قم بكتابة {user} في الرسالة.';
client.on('message', message => {
    if(!message.channel.guild) return;
     var success = new Discord.RichEmbed()
     .setDescription(`تم أرسال رسالتك بنجاح.`)
     .setColor('GREEN')
 if(message.content.startsWith(prefix + 'bc')) {
 if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
 let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
 let BcList = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setDescription(`**▶ 📝 لأرسال رسالة امبد قم بالضغط على \n ▶ ✏ لأرسال رسالة عادية قم بالضغط على \n ★ ${user} \n ★ ${server} \n ★ ${seender}**`)
 if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
 msg.react('📝')
 .then(() => msg.react('✏'))
 .then(() =>msg.react('📝'))
 
 let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
 let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
 let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
 let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
 EmbedBc.on("collect", r => {
 
 message.channel.send(success);
 message.guild.members.forEach(m => {
 let EmbedRep = args.replace('{server}' ,message.guild.name).replace('{user}', m).replace('{sender}', `${message.author}`)
 var bc = new
 Discord.RichEmbed()
 .setColor('RANDOM')
 .setDescription(EmbedRep)
 
 m.send({ embed: bc })
 msg.delete();
 })
 })
 NormalBc.on("collect", r => {
   message.channel.send(success);
 message.guild.members.forEach(m => {
    let NormalRep = args.replace('{server}' ,message.guild.name).replace('{user}', m).replace('{sender}', `${message.author}`)
 m.send(NormalRep);
 msg.delete();
 })
 })
 })
 }

client.login(process.env.BOT_TOKEN);
