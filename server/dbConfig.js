const mongoose = require('mongoose');

const { DB_URI, ATLAS_URI } = require('./constants.js');

exports.initDatabase = function() {
    return mongoose.connect(DB_URI);
};