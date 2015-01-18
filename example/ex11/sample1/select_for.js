var mongodb = require('mongodb'),
	MongoClient = mongodb.MongoClient;
	
MongoClient.connect('mongodb://localhost/ex11_sample1', function(err, db) {
	//選擇資料表contact
	db.collection('contact', function(err, collection) {
		collection.find({}, function(err, rows) {
			for ( var index in rows )
				console.log(rows[index]);
		})
	});
	
});
	