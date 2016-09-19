(function(database) {

 var MongoClient = require('mongodb').MongoClient;
 var mongoUrl = "mongodb://localhost/dash";
 var theDb = null;

 database.getDb = function(next) {
  if (theDb) {
    next(null, theDb)
  }
  else {
    MongoClient.connect(mongoUrl, function(err, db) {
      if(err) {
        next(err, null)
      }
      else {
        theDb = {
          db: db, 
          doctorCollection: db.collection('docs'),
          hospitalCollection: db.collection('hosps'),
          specialtyCollection: db.collection('specialty'),
          costestimateCollection: db.collection('admin'),
          userCollection: db.collection('user'),
        };
       next(null, theDb)
      }
    })
  } 
 }

 return

})(module.exports);
