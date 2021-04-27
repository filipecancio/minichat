const client = require("socket.io-client").connect("http://localhost:3000")
const readline = require('readline')
readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)

console.log("Cliente iniciado! 🚀🚀🚀")

client.on("connect",()=>{
    console.log(`🔌 Servidor conectado!`)

})


process.stdin.on('keypress', (str, key) => {
    client.emit("test-123",key.name)
    console.log(key.name)
})