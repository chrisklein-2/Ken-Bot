const {ApplicationCommandOptionType, PermissionFlagsBits} = require('discord.js');
module.exports = {
    
    name: 'ban',
    description: 'Bans a member from the server',
    options: [
        {
            name: 'target-user',
            description: 'The user to ban',
            required: true,
            type: ApplicationCommandOptionType.Mentionable,
        },
        {
            name: 'reason',
            description: 'The reason banning',
            required: false,
            type: ApplicationCommandOptionType.String,
        },
    ],

    permissionsRequired: [PermissionFlagsBits.Administrator],
    botPermissions:[PermissionFlagsBits.Administrator],

    callback: (client, interaction) => {
        interaction.reply(`ban ${client.ws.ping}`);
    },
};