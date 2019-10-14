const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    count: Number,
    users: {
        type: Array
    }
});

module.exports = mongoose.model('Team', teamSchema);