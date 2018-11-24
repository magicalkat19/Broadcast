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

client.on('message', message => {
	var args = message.content.split(' ');
	var args1 = message.content.split(' ').slice(1).join(' ');
	var args2 = message.content.split(' ')[2];
	var args3 = message.content.split(' ').slice(3).join(' ');
	var command = message.content.toLowerCase().split(" ")[0];
	var muf = message.mentions.users.first();
	
	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
	
	if(command == prefix + 'bc') {
		if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('\`\`ADMINISTRATOR\`\` **انت لا تمتلك صلاحية**')
		if(!args1) return message.channel.send(`**➥ Useage:** ${prefix}bc (كلامك)`);

		let bcSure = new Discord.RichEmbed()
		.setTitle(`:mailbox_with_mail: **هل انت متأكد انك تريد ارسال هذه الرسالة الى** ${message.guild.memberCount} **عضو؟**`)
		.setThumbnail(client.user.avatarURL)
		.setColor('GRAY')
		.setDescription(`**\n:envelope: ➥ الرسالة**\n\n${args1}`)
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL)

		message.channel.send(bcSure).then(msg => {
			msg.react('✅').then(() => msg.react('❎'));
			message.delete();


			let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
			let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

			let sendBC = msg.createReactionCollector(yesEmoji);
			let dontSendBC = msg.createReactionCollector(noEmoji);

			sendBC.on('collect', r => {
				message.guild.members.forEach(member => {
					member.send(args1.replace(`[user]`, member)).catch();
					if(message.attachments.first()){
						member.sendFile(message.attachments.first().url).catch();
					}
				})
				message.channel.send(`:timer: **يتم الان الارسال الى** \`\`${message.guild.memberCount}\`\` **عضو**`).then(msg => msg.delete(5000));
				msg.delete();
			});
			dontSendBC.on('collect', r => {
				msg.delete();
				message.reply(':white_check_mark: **تم الغاء رسالتك**').then(msg => msg.delete(5000));
			});
		})
	};


client.login(process.env.BOT_TOKEN);
