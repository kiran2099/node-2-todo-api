// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDosApp', (err, db) => {
    if (err) {
        console.log(`Unable to connect to database server: ${err}`);
    }
    else {
        console.log(`Connected to database server`);
        db.collection('ToDos').insertOne({
            text: 'Something to do',
            completed: false
        }, (err, result) => {
            if (err) {
                console.log(`Unable to add ToDos colletion: ${err}`);
            }
            else {
                console.log(JSON.stringify(result.ops, undefined, 2));
            }
        });

        db.collection('User').insertOne({
            name: 'KiranKumar Bussa',
            age: 25,
            location: 'Bangalore'
        }, (err, result) => {
            if (err) {
                console.log(`Unable to add User colletion: ${err}`);
            }
            else {
                console.log(JSON.stringify(result.ops, undefined, 2));
            }
        });

        db.close();
    }

});