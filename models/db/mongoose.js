const mongoose = require('mongoose');

mongoose.Promise = global.Promise

mongoose.connect('mongodb://will:will12345@ds119302.mlab.com:19302/node-security');

module.exports = { mongoose }