const mongoose = require("mongoose");
const studschema = new mongoose.Schema({
    firstname: {
        type:String,
        required:true
    },
    lastname: {
        type:String,
        required:true
    },
    username: {
        type:String,
        unique:true,
        required:true
    },
    password: {
        type:String,
        maxlength:10,
        minlength:9,
        required:true
    },
    confirmpassword: {
        type:String,
        required:true
    },
    city: {
        type:String,
        required:true
    },
    state: {
        type:String,
        required:false
    },
    phonenumber: {
        type:Number,
        maxlength:10,
        minlength:9,
        required:true,
        unique:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    }
})

// Collections

const Register = new mongoose.model("Information", studschema);

module.exports = Register;