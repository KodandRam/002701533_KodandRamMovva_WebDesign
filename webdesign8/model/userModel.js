const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        //match: [/[a-zA-Z]+/, "enter valid name"]
       // match: [/^[a-zA-Z ]+$/, "Please enter a valid name"]
    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
     }
})
module.exports = mongoose.model('User',userSchema)