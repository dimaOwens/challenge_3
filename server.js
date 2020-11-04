const express = require("express");
const app = express();
const PORT = 3000;
const axios = require('axios');






app.get('/', (req, res) => {
    res.json("Hello there")
})
app.post("/from1", (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var pass = req.body.password;
    console.log(name)
})
app.post("/from2", (req, res) => {

})
app.post("/from3", (req, res) => {

})
app.listen(PORT, (err, fine) => {
    if (err) console.log("ERR")
    else { console.log(`server is working on port: ${PORT}`) }
})