const { Pirate } = require('../models/pirate.model');

module.exports.create = (request, response) => {
    Pirate.create(request.body)
        .then(
            object => response.json(object))
        .catch(err => response.status(400).json(err));
}

module.exports.getAll = (request, response) => {
    Pirate.find({})
        .sort({ pirate_name: 1 })
        .then(objects => response.json(objects))
        .catch(err => response.json(err));
}

module.exports.getOne = (request, response) => {
    Pirate.findOne({_id:request.params.id})
        .then(object => response.json(object))
        .catch(err => response.json(err))
}

module.exports.update = (request, response) => {
    Pirate.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
        .then(updated => response.json(updated))
        .catch(err => response.status(400).json(err))
}

module.exports.delete = (request, response) => {
    Pirate.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
