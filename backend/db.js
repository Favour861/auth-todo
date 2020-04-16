const mongoose = require('mongoose');
const ( MongoClient) = require('mongodb');


// function initiallize(dbName, dbCollectionName, successCallback, failureCallback){
//     MongoClient.connect(uri, (err, dbInstance) => {
//         if(err){
//             console.log(`[MongoDB connection] ERROR: ${err}`);
//             failureCallback(err);
//         }else{
//             const dbObject = dbInstance.db(dbName)
//             const dbCollection = dbInstance.collection(dbCollectionName)

//             console.log(`[MongoDB connection] SUCCESS`);
//             successCallback(dbCollection);
//         }
//     })
// }

// module.exports = { initialize }



// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//   const collection = client.db("todo").collection("users");
//   // perform actions on the collection object
//   client.close();
// });