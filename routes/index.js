var express = require('express');
var router = express.Router();
let MongoClient = require('mongodb').MongoClient;
let assert = require('assert');
const uuid = require('uuid');


// // Connection Url
// const url = 'mongodb+srv://Love_Liz:Crance.2017@loveliz.mvrrv.mongodb.net/products?retryWrites=true&w=majority'

// // Database Name
// const dbName = 'products';
// let db;

// // Connect to MongoDB Atlas
// MongoClient.connect(url, (err, client) => {
//   assert.equal(null, err);
//   console.log('<<-- Connected successfully to Database -->>');

//   db = client.db(dbName);

//   // Find earrings
//   const earrings = () => {
//     const collection = db.collection('earrings');
//     return collection.find({}).toArray();
//   }

//   // Find hair_clips_&_accessories
//   const hairClipsAccessories = () => {
//     const collection = db.collection('hair_clips_&_accessories');
//     return collection.find({}).toArray();
//   }

//   // Find necklaces
//   const necklaces = () => {
//     const collection = db.collection('necklaces');
//     return collection.find({}).toArray();
//   }

//   // Find rings_&_anklets
//   const ringsAnklets = () => {
//     const collection = db.collection('earrings_&_ankletsrings');
//     return collection.find({}).toArray();
//   }

//   // Find scrunchies
//   const scrunchies = () => {
//     const collection = db.collection('scrunchies');
//     return collection.find({}).toArray();
//   }

//   // Find stickers
//   const stickers = () => {
//     const collection = db.collection('stickers');
//     return collection.find({}).toArray();
//   }
// });

module.exports = router;
