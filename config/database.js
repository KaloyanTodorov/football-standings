const mongoose = require('mongoose');
const config = require('./config');

const env = process.env.NODE_ENV || 'dev';

module.exports = () => {
    return mongoose.connect(config[env].dbURL);
}

