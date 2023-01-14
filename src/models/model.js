const mongoose  = require('mongoose')
const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        enum:['Mr', 'Mrs', 'Miss']
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false,
        required:true
    }
}, {timestamps:true})

module.exports = mongoose.model('user', userSchema)