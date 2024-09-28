import { config } from 'dotenv'
config()
import { Client, GatewayIntentBits } from 'discord.js'
const intents: any = Object.values(GatewayIntentBits),
    client = new Client({ intents })

client.on('ready', () => {
    console.log(`Logged in as ${client.user?.username}!`)
})

client.on('messageCreate', async message => {
    if (message.author.bot) return
    if (message.content == 'ping') message.reply('pong')
})

client.login(process.env['TOKEN'])