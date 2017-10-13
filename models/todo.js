const {mongoose} = require('../db/mongoose.js');
var ToDo = mongoose.model('ToDo', {
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {
    ToDo: ToDo
};