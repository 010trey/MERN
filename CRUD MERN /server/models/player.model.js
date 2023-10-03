const mongoose  = require('mongoose')

const PlayerSchema  = new mongoose.Schema({
    Name:{
        type:String,
        required:[true, "{PATH} is required ❌❌❌"],
        minlength:[3, "{PATH} must be at least 3 characters ⛔⛔⛔"]
    },
    TshirtNumber:{
        type:Number,
        required:[true, "{PATH} must be present 🛑🛑🛑"],
        min:[1, "{PATH} is Too short 🤬🤬🤬"]
    },
    isAvailable : {
        type:Boolean,
        default:false
    }
}, {timestamps:true});

module.exports = mongoose.model('Player', PlayerSchema);
