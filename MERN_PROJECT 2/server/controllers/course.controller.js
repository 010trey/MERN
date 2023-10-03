
const {Course} = require('../models/courses.model');
const SECRET = process.env.SECRET 
const jwt = require('jsonwebtoken')
const {Teacher} = require('../models/Teacher.model')





module.exports={


    findAllCourses: (req, res) => {
        Course.find()
        .populate('teacher') 
        .then(response => res.status(200).json(response))
        .catch(error => res.status(400).json(error));
    },


    
    // createCourse: async(req,res)=>{
    //     const userToken = req.cookies.userToken;
    //     const loggedUserId = jwt.verify(userToken, SECRET);
        
    //     if (!userToken) {
    //         return res.status(401).json({ error: 'JWT token missing' });
    //         }
    //     try{

    //         const CreateCourse = await Course.create(
    //             req.body,
    //             loggedUserId.id,
    //             { new: true }
    //           );


    //           if (!CreateCourse) {
    //             return res.status(404).json({ error: 'User not found' });
    //           }
        
    //     return res.status(200).json(CreateCourse);
    //     }catch(error){
    //         console.error("Error applying to the service:", error);
    //         res.status(500).json({ error: "Internal server error." });
    //         res.status(401).json({ error: "Invalid or expired token." });

    //     }







    createCourse: async (req, res) => {
        const teacherToken = req.cookies.teacherToken;
        const { id: userId } = jwt.verify(teacherToken, SECRET)
        console.log(userId,"***************÷");
        try {
            const newCourse = await Course.create({ ...req.body, teacher: userId })
            console.log(newCourse,"******************");
            await Teacher.findByIdAndUpdate(userId, { $push: { courses: newCourse._id } })
            res.status(201).json(newCourse)
        } catch (error) {
            console.log("DATABASE Create course :", error);
            res.status(400).json(error.errors)
        }
    
        // Course.create(req.body)
        // .then(response=>
        //     res.status(201).json(response)
        //     )
        // .catch(error=>res.status(400).json(error.errors))
    },
    finOneCourse:(req,res)=>{
        Course.findOne({_id:req.params.id})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(404).json(error))
    },
    updateCourse:(req,res)=>{
        Course.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },
    deleteCourse:(req,res)=>{
        Course.findByIdAndDelete({_id:req.params.id})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },


    applyToCourse: async (req, res) => {
        const { id: userId } = jwt.verify(req.cookies.userToken, SECRET);
        const courseId = req.body.courseId; // Get courseId from the request body
      
        try {
          // Check if the user is already enrolled in the course
          const course = await Course.findById(courseId);
      
          if (course.students_enrolled.includes(userId)) {
            return res.status(400).json({ error: "User is already enrolled in this course." });
          }
      
          // Add the user's ID to the students_enrolled array of the course
          const updatedCourse = await Course.findByIdAndUpdate(
            courseId,
            { $push: { students_enrolled: userId } },
            { new: true }
          );
      
          res.status(200).json(updatedCourse);
        } catch (error) {
          res.status(400).json({ error: "Error applying to the course." });
        }
      }






}

