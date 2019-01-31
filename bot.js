const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"

client.on('ready', () => {
	// Cmd Sending in Console
	  console.log('')
	  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
	  console.log('╔                           BroadCast                               ╗')
	  console.log('')
	  console.log('╔ Best Bot in 2019 and 2040 ╗')
	  console.log(`[Start] ${new Date()}`)
	  console.log(`╔[ Logged in as * [ " ${client.user.username} " ] ]?`);
	  console.log(`╔[ Servers [ " ${client.guilds.size} " ]╗`);
	  console.log(`╔[ Users [ " ${client.users.size} " ]╗`);
	  console.log(`╔[ Channels [ " ${client.channels.size} " ]╗`);
	  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
      console.log('')
      client.user.setGame('-bc | BroadCast',`https://www.twitch.tv/BroadCast`);
    });

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
