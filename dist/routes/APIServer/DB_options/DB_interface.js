const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const DB_Basic = require('./DB_Basic');

exports.DB_createDB = function (db_url, cb) {
    MongoClient.connect(DB_Basic.DB_URL + db_url, function (err, db) {
        if (err) return cb(err);
        cb();
        db.close();
    });
};

exports.DB_createCollection = function (db_url, db_name, cb) {
    MongoClient.connect(DB_Basic.DB_URL + db_url, function (err, db) {
        if (err) return cb(err);
        var dbase = db.db(db_url);
        dbase.createCollection(db_name, function (err) {
            if (err) return cb(err);
            if (typeof cb === "function") {
                cb()
            }
            db.close();
        });
    });
};

exports.DB_insertData = function (db_url, db_name, params, cb) {
    MongoClient.connect(DB_Basic.DB_URL + db_url, function (err, db) {
        if (err) return cb(err);
        var collection = db.collection(db_name);
        collection.insert(params, function (err, data) {
            if (err) return cb(err, null);
            cb(null, data)
        });
        db.close();
    });
};

exports.DB_selectData = function (db_url, db_name, params, cb) {
    MongoClient.connect(DB_Basic.DB_URL + db_url, function (err, db) {
        if (err) return cb(err);
        var collection = db.collection(db_name);
        var whereStr = params;
        collection.find(whereStr).toArray(function (err, data) {
            if (err) return cb(err, null);
            cb(null, data)
        });
        db.close();
    });
};

exports.DB_updateData = function (db_url, db_name, params, cb) {
    MongoClient.connect(DB_Basic.DB_URL + db_url, function (err, db) {
        if (err) return cb(err);
        var collection = db.collection(db_name);
        var whereStr = params.where;
        if (Object.keys(params.where).indexOf('_id') != -1) {
            params.where._id = ObjectID(params.where._id)
        }
        var updateStr = {$set: params.update};
        collection.update(whereStr, updateStr, function (err, data) {
            if (err) return cb(err, null);
            cb(null, data)
        });
        db.close();
    });
}