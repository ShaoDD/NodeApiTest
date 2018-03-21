/**
 * Created by Administrator on 2016/10/17 0017.
 */
// var sysConfig = require('./config');
// var utils = require('./utils');
// var async = require('async');
// var https = require('https');
// var expiredTime = 900000000;
// var webdebug = true;
// var jwt = require('jsonwebtoken');
// var base64 = require('base64url');
// var md5 = require('md5');

exports.filterFun = function (req, res, next) {
    console.log("**********Start**********");
    let url = req.originalUrl;
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Methods", "GET,POST");
    // res.setHeader("Access-Control-Allow-Headers", "Authorization,Origin, X-Requested-With, Content-Type, Accept");

    if (url.indexOf("/api") != -1) {
        console.log("[[[(api)]]]");
        clientApi(req, res, next)
    } else {
        return next()
    }
};

var clientApi = function (req, res, next) {
    return next()
};