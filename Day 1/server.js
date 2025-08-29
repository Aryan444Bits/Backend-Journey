// const http = require('http');


// const server = http.createServer(); // server is created but not started

// server.listen(3000,()=>{ // here server is started 
//     console.log("Server is running on port 3000");
    
// }) // here if any request goes to the server it will listen it only
// here we only create the server and start it only. we can't program it what response it will shown after requesting



const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("Hello Backed Word from the Server !!") // here we program the server if any request send to the server then it will shown the "Hello Backed Word from the Server !!"
})

server.listen(3000,()=>{
    console.log("Serrver is running on port 3000");
})