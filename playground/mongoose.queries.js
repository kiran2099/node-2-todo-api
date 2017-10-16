const {ObjectID} = require('mongodb');
const {mongoose} = require('../db/mongoose');
const {ToDo} = require('../models/todo');

var id = '59e45cbdbed7012413242886'
if(ObjectID.isValid(id)){

}

ToDo.find({
    _id: id
}).then((todos) => {
    if(!todos || todos.length === 0){
        return console.log(`ID's not found!`);
    }
    console.log(JSON.stringify(todos));
}
).catch((e) => {
    console.log(e);
});

ToDo.findOne({
    _id: id
}).then((todo) => {
    if(!todo){
        return console.log(`ID's not found!`);
    }
    console.log(JSON.stringify(todo));
}).catch((e) => {
    console.log(e);
});

ToDo.findById({
    _id: id
}).then((todo) => {
    if(!todo){
        return console.log(`ID's not found!`);
    }
    console.log(JSON.stringify(todo));
}).catch((e) => {
    console.log(e);
});