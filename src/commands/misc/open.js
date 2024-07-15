require('dotenv').config();
const{ REST, Routes } = require('discord.js');

module.exports = {
    name: 'areweopen',
    description: 'Is the store open',

    callback: async (client, interaction) => {
        const rest = new REST({version: '10'}).setToken(process.env.TOKEN);
        console.log(rest)
    }

}