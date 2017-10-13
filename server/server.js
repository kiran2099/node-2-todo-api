const express = require('express');

const {mongoose} = require('../db/mongoose.js');
const {ToDo} = require('../models/todo.js');
const {User} = require('../models/user.js');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body.text);
    var todo = new ToDo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.listen('3000', () => {
    console.log('Server is up and on port 3000');
});