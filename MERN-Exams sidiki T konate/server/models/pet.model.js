const mongoose  = require('mongoose')

const PlayerSchema  = new mongoose.Schema({
    Name:{
        type:String,
        required:[true, "{PATH} is required ❌❌❌"],
        minlength:[3, "{PATH} must be at least 3 characters ⛔⛔⛔"]
    },
    pettype:{
        type:String,
        required:[true, "{PATH} must be present 🛑🛑🛑"],
        min:[3, "{PATH} must be at least 3 characters 🤬🤬🤬"]
    },
    Description: {
        type:String,
        required:[true, "{PATH} must be present 🛑🛑🛑"],
        min:[3, "{PATH} must be at least 3 characters 🤬🤬🤬"]
    },
    Skill1:{
        type:String
    },
    Skill2:{
        type:String
    },
    Skill3:{
        type:String
    },
},
{timestamps:true});

module.exports = mongoose.model('Player', PlayerSchema);
