const mongoose = require('mongoose');

mongoose.promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/ToDoApp');

module.exports = {
    mongoose: mongoose
};
