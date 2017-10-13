// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDosApp', (err, db) => {
    if (err) {
        console.log(`Unable to connect to database server: ${err}`);
    }
    else {
        console.log(`Connected to database server`);
        db.collection('ToDos').findOneAndUpdate({
            _id: new ObjectID('59e08c71d750b25bb90ef2cb')
        }, {
                $set: {
                    text: 'Have snacks',
                    completed: true
                }
            }, {
                returnOrginal: false
            }).then((result) => {
                console.log(result);
            }, (err) => {
                console.log(`Unable to update doc: ${err}`);
            });

        db.collection('User').findOneAndUpdate({
            _id: new ObjectID('59e08ca3d750b25bb90ef2dd')
        }, {
                $set: {
                    name: 'KiranKumar Bussa'
                },
                $inc: {
                    age: 1
                }
            }, {
                returnOrginal: false
            }).then((result) => {
                console.log(result);
            }, (err) => {
                console.log(`Unable to update doc: ${err}`);
            });

        // db.close();
    }

});