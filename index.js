const express = require("express");
const app = express();
require("dotenv").config();
const port = 4000;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/twitter", (req, res)=>{
    res.send("Welcome to twitter route");
})

app.get("/login", (req, res)=>{
    res.send("Login to your account");
})

app.get("/chai", (req, res)=>{
    res.send('Chai orr code');
})

app.listen(process.env.PORT, ()=>{
    console.log(`Your server is starting at port ${process.env.PORT}`);
})