const express = require('express')
const app = express();

app.get('/', (req,res)=>{
    res.end("Hello World")
})

app.get("/about", (req,res)=>{
    res.end("About Page")
});

app.listen(8000, "0.0.0.0", (req, res)=>{
    console.log("Listening to port 8000")
})