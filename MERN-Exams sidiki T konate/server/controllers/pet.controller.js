const Pet = require('../models/pet.model')


module.exports = {

    findAll : (req,res) => {
        Pet.find()
        .then(dbResponse => {
            console.log("DATABASE RESPONSE TO FIND ALL :", dbResponse );
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR FIND ALL :", dbError);
            res.status(400).json(dbError)
        } )
    },

    findOne : (req,res) => {
        Pet.findById(req.params.id)
        .then(dbResponse => {
            console.log("DATABASE RESPONSE : ", dbResponse);
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR FIND ALL :", dbError);
            res.status(400).json(dbError)
        })
    },

    create : (req,res) => {
        Pet.create(req.body)
        .then(dbResponse => {
            console.log("DATABASE RESPONSE  :", dbResponse );
            res.status(201).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE Create :", dbError);
            res.status(400).json(dbError.errors)
        })
    },

    update : (req,res) => {
        Pet.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        .then(dbResponse => {
            console.log("DATABASE RESPONSE  :", dbResponse );
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR FIND ALL :", dbError);
            res.status(400).json(dbError.errors)
        })
    },

    delete : (req, res) => {
        Pet.findByIdAndDelete(req.params.id)
        .then(dbResponse => {
            console.log("DATABASE RESPONSE  :", dbResponse );
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR FIND ALL :", dbError);
            res.status(400).json(dbError)
        })
    }
}
