const server = require("socket.io")(3000)

console.log("Servidor iniciado! 🚀🚀🚀")

server.on("connection",(socket)=>{
    console.log(`🔌 Cliente ${socket.id} conectado!`)
})