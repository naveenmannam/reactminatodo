require('dotenv').config();
const mongoose = require('mongoose');
const todo = require('./todo');
mongoose.connect(process.env.DB_URI);
mongoose.Promise = global.Promise;

module.exports = todo;



