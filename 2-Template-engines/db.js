// lowdb
var low = require('lowdb');
var FileSync =require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
db = low(adapter);

//defaults JSON file
db.defaults({cart:[]})
  .write()

  module.exports = db;