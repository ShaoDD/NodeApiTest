var MongoClient = require('mongodb').MongoClient;
var DB_Basic = require('./DBOptions/DB_Basic');

var DB_insertData = function (options, cb) {
    var data = {
        name: options.name,
        password: options.password
    };
    MongoClient.connect(DB_Basic.DB_URL, function (err, db) {
        console.log("连接成功！");
        var collection = db.collection('users');
        collection.insert(data, function (err, data) {
            if (err) {
                console.log(err);
                return false;
            } else {
                cb(data.ops)
            }
        });
        db.close();
    });
};

exports.DB_insertData = DB_insertData;