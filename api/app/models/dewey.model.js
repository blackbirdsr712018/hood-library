const mongoose = require('mongoose');

const DeweySchema = mongoose.Schema({
    key: String,
    className: String,
    description: String,
    image: String,
    subjects: [{
        key: String,
        title: String,
        icon: String
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Dewey', DeweySchema);