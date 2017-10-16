const express = require('express');

const {mongoose} = require('../db/mongoose.js');
const {ToDo} = require('../models/todo.js');
const {User} = require('../models/user.js');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

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

app.get('/todos', (req, res) => {
    ToDo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(400).send();
    }
    ToDo.findById({
        _id: id
    }).then((todo) => {
        if(!todo){
            return res.status(400).send();
        }
        res.send({todo});
    });

}, (e) => {
    res.status(400).send();
});
app.listen(PromiseRejectionEventInit, () => {
    console.log(`Server started and up on ${port}`);
});