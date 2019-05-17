const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type:String,
        required:true
    },
    age: {
        type:Number,
        required: true,
        min: 21,
        max: 99
    },
    location:{
        type:String,
        enum:['Dal','Aus'],
        required:true
    },
    transmission: {
        type:String,
        enum:['AUTO','MANUAL','BOTH']
    }
    //TODO: add reference to car model for listed vehicles
},{timestamp:true})
    module.exports = mongoose.model('User',userSchema)
