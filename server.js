const express = require("express");
const app = express();
const PORT = 3000;
const axios = require('axios');
import App from "./client/app.js"
import React from 'react'
import ReactDOM from "react-dom";

app.use(express.static(__dirname + '/./public'))

app.get('/', (req, res) => {
    res.json("Hello there")
})



ReactDOM.render(
    <App />, document.querySelector("#cont")
)
var moveToForm = () = {



}

app.post("/from1", (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var pass = req.body.password;

    console.log(name)
})

app.listen(PORT, (err, fine) => {
    if (err) console.log("ERR")
    else { console.log(`server is working on port: ${PORT}`) }
})