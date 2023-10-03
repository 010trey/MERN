const UserController = require('../controllers/user.controllers');
const {authenticate} = require('../config/jwt.config');
const PirateController = require('../controllers/pirate.controller');
const multer = require('multer');


module.exports = (app) => {
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.post('/api/logout', UserController.logout);

    app.post('/api/pirates/new', PirateController.create);
    app.get('/api/pirates', authenticate, PirateController.getAll);
    app.get('/api/pirates/:id',  PirateController.getOne);
    app.put('/api/pirates/update/:id', PirateController.update);
    app.delete('/api/pirates/delete/:id', PirateController.delete);
}
