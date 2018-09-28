const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!/';

client.on('ready', function(){
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', function(msg){
	
	if (!msg.content.startsWith(prefix) || msg.author.bot){
		return;
	}

	if(msg.content.startsWith(prefix + 'test')){
		msg.channel.send('Test.');
	}

});

client.login('token');