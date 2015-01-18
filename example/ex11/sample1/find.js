var mongodb = require('mongodb'),
	MongoClient = mongodb.MongoClient;
	
MongoClient.connect('mongodb://localhost/ex11_sample1', function(err, db) {
	//選擇資料表
	db.collection('contact', function(err, collection) {
		collection.find({
			name: 'Fred'
		},function(err, docs) {
			if ( err ) {
				console.log('查詢失敗');
				return ;
			}
			console.log('查詢成功');
			for ( var index in docs ) {
				var doc = docs[index];
				console.log(doc.name);
				//console.log(doc.tel);
				//console.log(doc.Taipei);
			}
		});
	});
	
});
	