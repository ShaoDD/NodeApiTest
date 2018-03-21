/**
 * Created by Administrator on 2016/12/28 0028.
 */
//数据库模块
const mysql = require('mysql');
//数据库配置信息
const settings = require('./SQL_setting');
//查询方法
function selectSQL(db, con, cb) {
    var connection = mysql.createConnection(settings.db);
    connection.connect();//开始连接
    //SQL语句
    var sql_string = 'select * from ' + db + '';
    if(con){
        sql_string += 'where' + con
    }
    console.log("[数据库语句]:" + sql_string);
    connection.query(sql_string, function (err, rows) {
        console.log('连接成功');
        if (err) throw err;
        console.log("返回数据");
        cb(rows)
    });
    //关闭连接
    connection.end(function (err) {
        if (err) {
            return;
        }
        console.log("关闭连接");
    });
}
//exports查询方法
exports.selectSQL = selectSQL;