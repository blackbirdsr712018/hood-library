const mongoose = require('mongoose');

const MaterialSchema = mongoose.Schema({
    key: String,
    title: String,
    description: String,
    image: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Material', MaterialSchema);