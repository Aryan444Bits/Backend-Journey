const app = require('./src/app')
const { createServer } = require("http");
const { Server } = require("socket.io");


const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  // ...
});


httpServer.listen(3000 , ()=>{
    console.log("Server is Running on port 3000"); 
})