// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDosApp', (err, db) => {
    if (err) {
        console.log(`Unable to connect to database server: ${err}`);
    }
    else {
        console.log(`Connected to database server`);
        db.collection('ToDos').find().count().then((count) => {
            console.log(`No. of ToDos docs: ${count}`);
        }, 
        (err) => {
            console.log(`Unable to count ToDos docs: ${err}`);
        });
        db.collection('ToDos').find({completed: true}).toArray().then((results) => {
            console.log('------ToDos------');
            console.log(JSON.stringify(results, undefined, 2));
        }, (err) => {
            console.log(`Unable to fetch ToDos data: ${err}`);
        });

        db.collection('User').find().count().then((count) => {
            console.log(`No. of User docs: ${count}`);
        }, 
        (err) => {
            console.log(`Unable to count ToDos docs: ${err}`);
        });

        db.collection('User').find({name: 'ShivaRaju'}).toArray().then((results) => {
            console.log('------User------');
            console.log(JSON.stringify(results, undefined, 2));
        }, (err) => {
            console.log(`Unable to fetch User data: ${err}`);
        });

        // db.close();
    }

});