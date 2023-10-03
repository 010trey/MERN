const petController = require('../controllers/pet.controller')

module.exports = app => {
    app.get('/api/pet', petController.findAll)
    app.get('/api/pet/:id', petController.findOne)
    app.post('/api/pet', petController.create)
    app.put('/api/pet/:id', petController.update)
    app.delete('/api/pet/:id', petController.delete)
}