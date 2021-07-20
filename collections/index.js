const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';

const dbName = 'vidllydb';
const client = new MongoClient(url, {useNewUrlParser: true});

// insert documents into vidllydb genres collection
const insertDocuments = function(db, callback){
    const collection = db.collection('genres');
    collection.insertMany([
        {
            "title": "title 1",
            "hrs": 2.5,
            "isSeasoned": 1 
        },
        {
            "title": "title 2",
            "hrs": 3.0,
            "isSeasoned": 0
        },
        {
            "title": "title 3",
            "hrs": 1.5,
            "isSeasoned": 1
        }
    ] , function(err, result){
        assert.equal(null, err);
        // assert.equal(3, result.ops.length);
        console.log(`Inserted 3 documents into the collection ${collection}`);
        callback(result);
    })
}

// getting all doocuments from vidllydb genres collections
const findDocuments = function(db, callback){
    const collection = db.collection('genres');
    collection.find({}).toArray(function(err, docs){
        assert.equal(err, null);
        console.log(docs);
        callback(docs);
    })
}

// connecting to db server
client.connect(err => {
    assert.equal(err, null);
    console.log("Connection is created successfully to server!");

    const db = client.db(dbName);

    insertDocuments(db, function(){
        findDocuments(db, function(){
            client.close();
        })
    })

})
// module.exports.findDocuments = findDocuments();
// module.exports.insertDocuments = insertDocuments();