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
      client.user.setGame('-bc | BroadCast',``);
    });

client.on("message", message => {
    if (message.content.startsWith("obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });

//bc online

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });

client.login(process.env.BOT_TOKEN);
