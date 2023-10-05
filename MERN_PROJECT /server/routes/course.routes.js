const courseController= require('../controllers/course.controller');


module.exports= app=>  {
    app.post('/api/course',courseController.createCourse)
    app.post('/api/course/apply',courseController.applyToCourse)
    app.get('/api/course',courseController.findAllCourses)
    app.get('/api/course/:id',courseController.finOneCourse)
    app.put('/api/course/:id',courseController.updateCourse)
    app.delete('/api/course/:id',courseController.deleteCourse)

}