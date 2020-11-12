let express = require("express");
let router = express.Router();
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

let testProducts;

// Connection URL
const URL = 'mongodb+srv://Love_Liz:Crance.2017@loveliz.mvrrv.mongodb.net/products?retryWrites=true&w=majority'

// Database Name
const dbName = 'products';

// Create New MongoClient
const client = new MongoClient(URL);

// Connect Method to Connect to Server
client.connect(function(err) {
  assert.equal(null, err);
  const db = client.db(dbName);

  db.collection('test_data').find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      testProducts = result;
      client.close();
  });


});


router.get("/", function(req, res, next) {
    res.send(testProducts);
});

module.exports = router;