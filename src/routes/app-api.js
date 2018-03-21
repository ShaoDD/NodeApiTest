/**
 * Created by WinterKiSS on 2016/9/12.
 */
const Action = require('./apiaction');
const base64 = require('base64url');
const md5 = require('md5');
const sqloperate = require('./SQL_interface/SQL_operate');

exports.appAPI = function (router) {
    router.get("/api/test", function (req, res) {
        var db = 'detail_list';
        var con = '';
        sqloperate.selectSQL(db, con, res);
    })
};