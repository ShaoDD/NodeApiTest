/**
 * Created by WinterKiSS on 2016/9/10.
 */
const Action = require("./apiaction");
const DataProxy = require("./data-proxy");

const mysql = require('mysql');
//配置模块
const sqloperate = require('./SQL_interface/SQL_operate');
var http = require('http');
var querystring = require('querystring');

exports.appRouter = ((router) => {
    //首页
    router.get("/", ((req, res) => {
            // var xxx = 0;
            //
            // var postData = querystring.stringify({
            //     site_id: '1595504989493255',
            //     type: ''
            // });
            //
            // var options = {
            //     hostname: 'h5.toutiao.com',
            //     port: 80,
            //     path: '/tetris/api/site/preview/',
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            //         'Content-Length': Buffer.byteLength(postData),
            //         'Cookie': 'sso_login_status=1; login_flag=c9bb8484a4cefae1118885e9668bb5bb; sid_tt=042834c72bde81448fe814ed75df4def; uid_tt=0901c8504104e74aaebe8330da45c75e; sessionid=042834c72bde81448fe814ed75df4def; sid_guard="042834c72bde81448fe814ed75df4def|1521532222|2591999|Thu\\054 19-Apr-2018 07:50:21 GMT"; gr_user_id=662e7fc6-146f-4c9c-9a6c-3e6473e057a1; toutiao-ad-session=s%3A_FD20N5VVrVEU0idMLYWSqnzS-KTDfml.limOIwFkWoGHqfZGYo6sBCybgv2LQmTm3FHu5BYgv8k; _ga=GA1.2.1535928344.1521532204; _gid=GA1.2.1555867497.1521532204; part=stable; tt_webid=6534931042284914184; tetris_preview=onprod; gr_session_id_861b284cbe1a4574=ed586d5a-032d-4538-8a4b-88a1bba407d3; gr_cs1_ed586d5a-032d-4538-8a4b-88a1bba407d3=user_id%3A95471592605'
            //     }
            // };
            //
            // var req_fun = function (options) {
            //     xxx++
            //     console.log('请求第' + xxx + '次')
            //     var req_option = http.request(options, function (res) {
            //         console.log('请求开始');
            //         res.setEncoding('utf-8');
            //         res.on('data', function (chun) {
            //             console.info(chun);
            //         });
            //         res.on('end', function () {
            //             console.log('请求结束');
            //             setTimeout(function () {
            //                 req_fun(options);
            //             }, 60000);
            //         });
            //     });
            //     req_option.on('error', function (err) {
            //         console.error(err);
            //     });
            //     req_option.write(postData);
            //     req_option.end();
            // };
            //
            // req_fun(options);

            res.end();
        })
    );
});