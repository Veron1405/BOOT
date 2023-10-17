const discord = require("discord.js")
const cliente = new discord.Client()

cliente.on('ready', () => {
    console.log("logado")
})

cliente.on('message', (Message) => {
    if (message.content === "oi"){
        message.reply("oi ju")
    }
})

cliente.login("MTE2MzgzNjIzNzM1MDcxMTQzOA.G79H2i.N1dZeQWWD4MMMnP4CFYbWfcpGnI4gfSp23b43E")