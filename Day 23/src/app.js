const express = require('express');
const morgan = require('morgan')


const app = express();

app.use(morgan('dev'))
app.set('view engine','ejs');

app.post('/api/auth/register',(req,res)=>{
    res.send("Register endpoint");
})

app.get('/',(req,res)=>{
//     res.render("index",{messages:[
//         "Hello from the backend",
//         "This is EJS template engine",
//         "You are learning backend development",
//         "EJS is a templating engine",
//         "Express makes it easy to serve web pages"
//     ]
// });

    res.render("index",{
        htmls:[
        "<h2>Hello from the backend</h2>",
        "<h3>This is EJS template engine</h3>",
        "<h4>You are learning backend development</h4>",
        "<h5>EJS is a templating engine</h5>",
        "<h6>Express makes it easy to serve web pages</h6>"
        ]
    });
})

module.exports = app;