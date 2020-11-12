// npm module imports
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const assert = require('assert');
const cors = require('cors');
const uuid = require('uuid');
const { Product } = require('.//models/Product');
const insertTestData = require('./config/defaultData');
const MongoClient = require('mongodb').MongoClient;

// application module imports
let testAPIRouter = require('./routes/testAPI');
let testDataRouter = require('./routes/testData');

// database setup
console.log('<<-- Initiatiing Mongoose Test -->>');

// Connection URL
const URL = 'mongodb+srv://Love_Liz:Crance.2017@loveliz.mvrrv.mongodb.net/products?retryWrites=true&w=majority'

// Database Name
const dbName = 'products';

// Create New MongoClient
const client = new MongoClient(URL);

// Connect Method to Connect to Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log('<<-- Connection Successful -->>');

  const db = client.db(dbName);

  insertTestData(db, function() {
    client.close();
  });
});

// setting up express
var app = express();

// CORS Policy
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/testAPI', testAPIRouter);
app.use('/testData', testDataRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
