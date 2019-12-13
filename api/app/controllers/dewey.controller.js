const Dewey = require('../models/dewey.model.js');
// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    debugger;
    if(!req.body) {
        return res.status(400).send({
            message: "dewey content can not be empty"
        });
    }

    // Create a Note
    const dewey = new Dewey({
        key: req.body.key,
        className: req.body.className,
        description: req.body.description,
        image: req.body.image,
        subjects: req.body.subjects
    });

    
    // Save Material in the database
    dewey.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the dewey."
        });
    });
};

exports.findAll = (req, res) => {
    Dewey.find()
    .then(deweys => {
        res.send(deweys);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving deweys."
        });
    });
};

exports.findOne = (req, res) => {
    Dewey.findById(req.params.id)
    .then(deweys => {
        res.send(deweys);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving deweys."
        });
    });
};


exports.delete = (req, res) => {
    Dewey.findByIdAndRemove(req.params.id)
    .then(deweys => {
        if(!deweys) {
            return res.status(404).send({
                message: "deweys not found with id " + req.params.id
            });
        }
        res.send({message: "deweys deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "deweys not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete deweys with id " + req.params.id
        });
    });
};