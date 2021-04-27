const server = require("socket.io")(3000)

console.log("Servidor iniciado! 🚀🚀🚀")

server.on("connection",(socket)=>{
    console.log(`🔌 Cliente ${socket.id} conectado!`)

    socket.on("test-123", (msg) => {
        console.log(msg)
    });
})

