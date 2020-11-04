
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/form-user");


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("CONNECTED")
    // we're connected!
});


let userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    line1: Number,
    line2: Number,
    city: String,
    zip_code: Number,
    card_n: Number,
    exp_date: Date,
    cvv: Number,
    bzc: Number
})

let Info = mongoose.model('Repo', userSchema);

// var newUser = new Info({
//     name: String,
//     email: String,
//     password: String,
//     line1: Number,
//     line2: Number,
//     city: String,
//     zip_code: Number,
//     card_n: Number,
//     exp_date: Date,
//     cvv: Number,
//     bzc: Number
// })

// newUser.save()
module.exports.Info = Info;
module.exports.save = save;