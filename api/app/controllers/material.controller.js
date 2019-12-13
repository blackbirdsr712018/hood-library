const Material = require('../models/material.model.js');
// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    debugger;
    if(!req.body) {
        return res.status(400).send({
            message: "material content can not be empty"
        });
    }

    // Create a Note
    const material = new Material({
        key: req.body.key,
        id: req.body.id,
        title: req.body.title || "Untitled Note", 
        description: req.body.description,
        image: req.body.image,
    });

    
    // Save Material in the database
    material.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the material."
        });
    });
};

exports.findAll = (req, res) => {
    Material.find()
    .then(materials => {
        res.send(materials);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};


exports.delete = (req, res) => {
    Material.findByIdAndRemove(req.params.id)
    .then(materials => {
        if(!materials) {
            return res.status(404).send({
                message: "materials not found with id " + req.params.id
            });
        }
        res.send({message: "materials deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "materials not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete materials with id " + req.params.id
        });
    });
};