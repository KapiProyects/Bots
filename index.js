const { CommandClient } = require('eris')

// KpBot creation
async function init(token) {
    const KpBot = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })
    // Register the stupid ass command
    KpBot.on('ready', async () => {
        await KpBot.bulkEditCommands([{
            name: 'Usuarios',
            description: 'Si eres de **Fantic Studios* Recuerda Invitar más usuarios a nuestro servidor <3',
            type: 1,
        }])
        console.log(`Hola dueño, usa este para invitarme! \nhttps://discord.com/oauth2/authorize?client_id=${KpBot.user.id}&scope=applications.commands%20bot&permissions=3072`)
    })
    // Bot Action interaction creation event
    KpBot.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'Usuarios') {
            await interaction.createMessage({
                content: 'Si eres de **Fantic Studios* Recuerda Invitar más usuarios a nuestro servidor <3.'
            })
        }
    })
    KpBot.connect();
}

const tokenFromBotCommand = process.argv[2]
init(tokenFromBotCommand);
