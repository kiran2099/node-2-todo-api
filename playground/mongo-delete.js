// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDosApp', (err, db) => {
    if (err) {
        console.log(`Unable to connect to database server: ${err}`);
    }
    else {
        console.log(`Connected to database server`);
        console.log('---ToDos----');
        db.collection('ToDos').deleteMany({text: 'Something to do'}).then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        }, (err) => {
            console.log(`Unable to delete docs: ${err}`);
        });
        db.collection('ToDos').deleteOne({text: 'Have breakfast'}).then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        }, (err) => {
            console.log(`Unable to delete doc: ${err}`);
        });
        db.collection('ToDos').findOneAndDelete({text: 'Have breakfast'}).then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        }, (err) => {
            console.log(`Unable to delete docs: ${err}`);
        });

        console.log('---User----');
        db.collection('User').deleteMany({name: 'KiranKumar Bussa'}).then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        }, (err) => {
            console.log(`Unable to delete docs: ${err}`);
        });
        db.collection('User').deleteOne({name: 'ShivaRaju'}).then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        }, (err) => {
            console.log(`Unable to delete doc: ${err}`);
        });
        db.collection('User').findOneAndDelete({name: 'ShivaRaju'}).then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        }, (err) => {
            console.log(`Unable to delete docs: ${err}`);
        });

        // db.close();
    }

});