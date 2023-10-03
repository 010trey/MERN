const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const PirateSchema = new mongoose.Schema({
    pirate_name: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least 3 chars"]
    },
    pirate_img: {
        type: String,
        required: [true, "{PATH} is required"],
    },

    num_of_chests: {
        type: Number,
        required: [true, "{PATH} is required"],
        minlength: [1, "{PATH} is required"]
    },
    phrase: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [10, "{PATH} must be at least 10 chars"]
    },
    position: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [1, "{PATH} is required"],
        unique: true,
    },
    peg_leg: {
        type: Boolean,
        required: [true, "{PATH} is required"],
    },
    eye_patch: {
        type: Boolean,
        required: [true, "{PATH} is required"],
    },
    hook_hand: {
        type: Boolean,
        required: [true, "{PATH} is required"],
    }
}, { timestamps: true });
PirateSchema.plugin(uniqueValidator);
module.exports.Pirate = mongoose.model('Pirate', PirateSchema);