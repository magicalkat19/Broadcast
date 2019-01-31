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

   client.on("message", message => {
       var prefix = "-";
 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "bc")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;

                          if (!args[1]) {
                            
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":white_check_mark: | تم ارسال رسالة لا يوجد فيها شيء")
                                       .setColor("#FF00FF")
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {

                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال الرساله للجميع ..')
                                                                .setColor("#99999")
                               
                                                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});

client.login(process.env.BOT_TOKEN);
