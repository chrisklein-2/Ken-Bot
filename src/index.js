require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});


eventHandler(client);

//ken is watching you
client.on('ready', (c) => {
  
  client.user.setActivity({
      name: "your every move",
      type: ActivityType.Watching
  })
});

client.on('messageCreate', (message) =>{
  
  if(message.author.bot){
      return;
  }

  userInput = message.content.toLowerCase();
  temp = Math.floor(Math.random()*999);

  const date = new Date();

  if(userInput === "ken whats todays date?" || userInput === "ken whats todays date"){
    if(date.getDate()===28 && date.getMonth()===6){
      message.reply("Who cares, its Chris' birthday!");
    }
    else{
      message.reply(`${date.getMonth()+1}/${date.getDate()}... not Chris' Birthday`);
    }
    return;
  }


  if(userInput === "ken what is this" || temp == 93){
    message.reply("its just a wittil bwead");
    return;
  }

  //splits the input to check individual words
  words = userInput.split(" ");

  if(userInput === "i'm going to the bathroom" || userInput === 'im going to the bathroom'){
    message.reply("Check it while you're in there");
    return;
  }

  if(userInput === 'twelve ten' || userInput === "12-10" || userInput === "12 10"){
    message.reply('Firehouse to Welcome!');
    return;
  }

  //welcome to firehouse
  if(userInput === '10-12' || userInput === '10 12' || userInput === 'ten twelve'){
      message.reply('Welcome to Firehouse!');
      return;
  }

  //mark
  if(userInput.includes('mark')){
    message.reply("Mark is always watching you!");
    return;
  }

  //flipping
  if(userInput.includes('flip') || userInput.includes('flipping') || userInput.includes('flipped')){
      message.reply("I see you flipping over there!");
      return;
  }

  //bulldogs
  if(userInput.includes('dog')){
      message.reply("Speaking of dogs, GO BULLDOGS!");
      return;
  }
  
  //ken says hi
  if((words[0]==='hi' || words[0]==='hello' || words[0]==='hey' || words[0]==='wassup') && words[1] === 'ken'){
      message.reply("Hello");
      return;
  }
  

  //ken doesn't want to be bothered
  if((userInput.includes('please') || userInput.includes('help')) && userInput.includes('ken')){
    message.reply("Stop begging me for things!");
    return;
  }

  //asking ken a question
  if (words[0] === 'ken' && words[1] === 'can'){
      
      if(words[2] === 'you'){
          message.reply('No');
          return;
      }
  
      words.shift();
      words.shift();

      //gets rid of the i/we when retyping message
      if (words[0] === 'i' || words[0] === 'we'){
          words.shift();
      }
      
      //choice for switch statement
      choice = Math.floor(Math.random()*3);
      word = words.join(" ");

      switch(choice){

          case 0:
              message.reply(`When we finish this order you can ${word}.`);
              break;
          
          case 1:
              message.reply(`If the greensheet is done you can ${word}.`);
              break;

          case 2:
              message.reply(`Maybe if you get enough surveys you can ${word}.`);
              break;

          case 3:
              message.reply(`If you rotated steamers I can see ${word}ing happening.`);
              break;

      }
      return;
  }
  //default answer

  if(words[0] === 'ken' && words[1] !== 'can'){
    temp = Math.floor(Math.random()*3);

    if(temp === 1){
      message.reply("Just do a greensheet");
    }
    if(temp == 2){
      message.reply("No... \n     ...\n I love Chris!");
    }
    if(temp == 0){
      message.reply(`${userInput}? \nWe have a little fun here :)`);
    }
    return;
  }

  if(userInput.includes("ken")){
    message.reply(`I don't have anything to say to that.`);
  }

})


client.login(process.env.TOKEN);