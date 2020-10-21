const assert = require('assert');

const insertTestData = function(db, callback) {
    const collection = db.collection('test_data');
    collection.insertMany([
        {a : 1}, {a : 2}
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(2, result.result.n);
        assert.equal(2, result.ops.length);
        console.log('<<-- Insterted Test Data -->>');
        callback(result);
    });
  }

module.exports = insertTestData;