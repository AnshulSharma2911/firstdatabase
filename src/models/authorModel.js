const mongoose = require("mongoose")
const authorSchema = new mongoose.Schema({

    fname: {
        type: String,
        required: true
    },

    lname: {
        type: String,
        required: true
    },


    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
},
    { timestamp: true });

module.exports = mongoose.model('authorModel', authorSchema)