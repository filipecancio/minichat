const client = require("socket.io-client").connect("http://localhost:3000")

console.log("Cliente iniciado! 🚀🚀🚀")

client.on("connect",()=>{
    console.log(`🔌 Servidor conectado!`)

})

setInterval(()=>{
    client.emit("test-123","a");
},1000)