const mongoose = require('mongoose');



const CoursesSchema = new mongoose.Schema({
    classGrade: { type: String ,
    required:[true,"For what class is your Grade designed"],
    enum: ["Sixième",  "Cinquième",  "Quatrième", "Troisième"],

},
title:{ type:String,
    required:[true,"DON'T YOU HAVE A Title"],
    minlength:[3,"3 characters 🤟 Minimum "]
},


price:{
    type:Number,
    required:[true,"What is your Price"],
},



// duration:{
//     type:Number,
//     required:[true,"How long does the course last"]
// },
// reviewNote: {
//     type: Number,
//     min: 1,
//     max: 5,
//   },
// reviewComment: {
//     type: String,
//     minlength: 3,
//   },



// courseAvailability : {
//     startDate: Date,
//     monday: { type: String, default: null },
//     tuesday: { type: String, default: null },
//     wednesday: { type: String, default: null },
//     thursday: { type: String, default: null },
//     friday: { type: String, default: null },
//     saturday: { type: String, default: null },
//     sunday: { type: String, default: null },
//     status: {type: Boolean, default:false}
// },

dates: {
    type: Date,
    required: true,
},


teacher: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"Teacher"
},


students_enrolled: {
    type:[mongoose.Schema.Types.ObjectId],
    ref:"Student"
}

}, { timestamps: true });




const Course = mongoose.model("Course",CoursesSchema);
module.exports= {Course, CoursesSchema}
