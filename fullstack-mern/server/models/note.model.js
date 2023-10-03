const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({

    title:{
        type:String,
        require:[true, "Note title is required"],
        minlength:[3, "titel must be at least 3 characters "]
    },

    content:{
        type:String,
        required:[true, "content must be present"],
        minlength:[10, "context is too shrot"]
    },

    IsImportant:{
        type:Boolean,
        default:false
    }

},{timestamps:true})

module.exports = mongoose.model('Note', NoteSchema);

// const Note = mongoose.model('Note', NoteSchema);

// module.exports = Note;