const playerController = require('../controllers/player.controller')

module.exports = app => {
    app.get('/api/players', playerController.findAll)
    app.get('/api/players/:id', playerController.findOne)
    app.post('/api/players', playerController.create)
    app.put('/api/players/:id', playerController.update)
    app.delete('/api/players/:id', playerController.delete)
}