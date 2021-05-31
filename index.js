//install discord js to make the code work

let Discord = require("discord.js");
let client = new Discord.Client();

client.on("ready", () => {
  console.log("Up and ready to use ;)");
  client.user.setPresence({ activity: { name: "PUT ANYTHING" }, status: "idle" });  // online idle dnd 
});

client.on("message", message => {
    if (message.content === "ping") {
    message.channel.send("pong");
  }

if (message.content === "embed") {
        let embed = new Discord.MessageEmbed()
        .setTitle("This is Embed Title")
        .setDescription("This is Embed description")
        .setColor("random")
        .setFooter("This is Embed Footer");
        message.channel.send(embed);
  }
  
if (message.content.startsWith("!kick")) {
        if (message.member.hasPermission("KICK_MEMBERS")) {
        let member = message.mentions.members.first();
        if (!member) message.channel.send("Please mention someone");
        else {
        member.kick().then(mem => {
        message.channel.send(`Kicked ${mem.user.username}`);
          });
        }
      } else {
        message.reply("You don;t have permission to do that");
      }
    }
  
  
if (message.content.startsWith("!warn")) {
        let victim = message.mentions.users.first();
        if (!victim) message.reply("mention someone to warn.");
        else {
        let embed = new Discord.MessageEmbed()
        .setTitle("Warnings")
        .setDescription(`${victim} got warned by ${message.author}!`)
        .setColor("RANDOM")
        .setFooter(`Moderater : ${message.author.username}`)
        .setTimestamp();

      message.channel.send(embed);
    }
  }
  
if (message.content.startsWith("!mute")) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
        let member = message.mentions.members.first();
        if (!member) message.channel.send("mention someone to mute!");
        else {
        member.roles.add("YOUR MUTED ROLE ID HERE");
        message.channel.send("Member has been succesfully muted.");
      }
    } else {
      message.reply("You don't have permission to do that!");
    }
  }
  
if (message.content.startsWith("!unmute")) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
        let member = message.mentions.members.first();
        if (!member) message.channel.send("mention someone to unmute!");
        else {
        member.roles.remove("Muted role id here");
        message.channel.send("Member has been succesfully unmuted.");
      }
    } else {
      message.reply("You don't have permission to do that!");
    }
  }
  
if (message.content.startsWith("!ban")) {
        if (message.member.hasPermission("BAN_MEMBERS")) {
        let member = message.mentions.members.first();
        if (!member) message.channel.send("Please mention someone to ban");
        else {
        member.ban().then(mem => {
          message.channel.send(`Banned ${mem.user.username}`);
        });
      }
    } else {
      message.reply("You dont have permissions to do that");
    }
  }
  
if (message.content === "!D.T.O.S.") {
        let embed = new Discord.MessageEmbed()
        .setTitle("Discord Terms of Service")
        .setDescription("https://discord.com/terms")
        .setColor("#00ffd5")
        .setFooter("PLEASE READ AND UNDERSTAND IT!!!");
        message.channel.send(embed);
  }
if (message.content === "!server-rules") {
        let embed = new Discord.MessageEmbed()
        .setTitle("Server Rules")
        .setDescription("#rules")
        .setColor("#00ffd5")
        .setFooter("PLEASE READ AND UNDERSTAND IT!!!");
        message.channel.send(embed);
  }
  
if (message.content === "!ping") {
    message.channel.send(`**${client.ws.ping}ms** is the bot ping!`);
  }
  
if(message.content.startsWith("!purge")){
  let arg = message.content.split(" ")
  if(message.member.hasPermission("MANAGE_MESSAGES")) {
  let clear = arg[1];
  if(!clear) return message.channel.send(`:x: | \`Incorrect usage of command you need to provide an amount of messages to Clear.\` 
  **Example:** \`!purge 50\` `)
  if(isNaN(clear)) return message.channel.send(":x: | ``Please Put a Valid Number to Clear messages.``")
  if(clear > 100) return message.channel.send(":x: | ``I can't Clear more than 100 messages.``")
  if(clear < 1) return message.channel.send(":x: | ``You cannot Clear less than 1 message.``")

  message.channel.bulkDelete(clear)
  message.channel.send(`:white_check_mark: | \`Succesfully cleared ${clear} messages! | If purge fails please make sure I have MANAGE_MESSAGES to make the purge seccessful.\` `)
  .then(message => 
  message.delete({timeout: 10000})
 )
  }else{
  message.reply("You dont have perms!")
} 
}
  
if(message.content === "!serverinfo") {
     let embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setTitle("Server Info")
     .setImage(message.guild.iconURL)
     .setDescription(`${message.guild}'s Information.`)
     .addField("Member Count", `This server has ${message.guild.memberCount} member(s).`)
     .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emoji(s).`)
     .addField("Roles Count", `This server has ${message.guild.roles.cache.size} role(s).`)
     message.channel.send(embed)
}
  
if(message.content.toLowerCase().startsWith("!whois")) {
    let user = message.mentions.users.first() || message.author;
    let member = message.mentions.members.first() || message.member;
    let e = new Discord.MessageEmbed()
    .setColor("#C724B1")
    .setTimestamp()
    .addFields({
    name: "User Joined Server At",
    value: member.joinedAt
}, {
    name: "User Created At",
    value: user.createdAt
}, {
    name: "User Name & Tag",
    value: user.tag
}, {
    name: "User ID",
    value: user.id
})
    .setThumbnail(user.displayAvatarURL({ dynamic: true }))
    message.channel.send(e);
};
 
if (message.content === "!help") {
        let embed = new Discord.MessageEmbed()
        .setTitle("My Commands")
        .setDescription("These are all my COMMANDS")
        .addFields(
        { name: "!help", value: "My COMMANDS" },
        { name: "!kick", value: "Kicks Member" },
        { name: "!warn", value: "Warns Member" },
        { name: "!mute", value: "Mutes Member" },
        { name: "!unmute", value: "Unmutes Member" },
        { name: "!ban", value: "Bans Member" },
        { name: "!purge", value: "Delete 1-100 messages" },
        { name: "!server-rules", value: "For Server Rules", inline: true },
        { name: "!serverinfo", value: "For Server info", inline: true },
        { name: "!whois", value: "Who is<user>", inline: true },
        { name: "!ping", value: "latency!", inline: true },
        { name: "!D.T.O.S.", value: "Discord Terms of Service", inline: true },
        
        
      )
      .setColor("#00ffd5")
      .setFooter("That's all");
    message.channel.send(embed);
  }
  
});
  
client.login("your bot token goes here");