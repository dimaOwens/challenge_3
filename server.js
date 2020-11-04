

const express = require('express');
const app = express();
const PORT = 8000;

//var path = require("path")
var bodyParser = require('body-parser');
// const axios = require('axios');
// import App from "./client/App.js"
// import React from 'react'
// import ReactDOM from "react-dom";

// import bodyParser from 'body-parser';
//app.use(express.static(__dirname + '/./public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// app.use("/", (req, res) => {
//     res.sendFile("C:/Users/SAQERpc/Desktop/New folder/challenge3/public/index.html");
// })

app.get('/', (req, res) => {
    console.log("ok another try")
    res.json("Hello again")
})

var obj = {}
app.post("/", (req, res) => {
    var newUser = new
        obj["name"] = req.body.name;
    console.log(req.body.name);
    obj["email"] = req.body.email;
    obj["password"] = req.body.password;
    res.render("")
})
// ReactDOM.render(
//     <App />, document.querySelector("#cont")
// )



// app.post("/from1", (req, res) => {
//     var name = req.body.name;
//     var email = req.body.email;
//     var pass = req.body.password;

//     console.log(name)
// })

app.listen(PORT, (err, fine) => {
    if (err) console.log("ERR")
    else { console.log(`server is working on port: ${PORT}`) }
})