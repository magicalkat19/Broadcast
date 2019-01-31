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

client.on("message", message => {

            if (message.content.startsWith(prefix + "obc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bcall')){
if(!message.author.id === 'اي دي صاحب البوت') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.login(process.env.BOT_TOKEN);
