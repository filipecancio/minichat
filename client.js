const client = require("socket.io-client").connect("http://localhost:3000")

console.log("Cliente iniciado! 🚀🚀🚀")

client.on("connect",(socket)=>{
    console.log(`🔌 Servidor conectado!`)
})