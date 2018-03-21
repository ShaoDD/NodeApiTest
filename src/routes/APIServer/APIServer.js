var MongoDB_OPT = require('./DB_options/DB_interface');

exports.APIServer = function (router) {
    router.get('/api/createDB', function (req, res) {
        MongoDB_OPT.DB_createCollection('TuTu', 'staff', function (err) {
            if (err) {
                res.end(JSON.stringify(err));
            } else {
                var params = {
                    code: '200',
                    data: 'ok'
                };
                res.end(JSON.stringify(params));
            }
        });
    });

    router.post('/api/insertDB', function (req, res) {
        var params = req.body;
        MongoDB_OPT.DB_insertData('TuTu', 'staff_task', params, function (err, data) {
            if (err) {
                res.end(JSON.stringify(err));
            } else {
                var params = {
                    code: '200',
                    data: data
                };
                res.end(JSON.stringify(params));
            }
        })
    });

    router.get('/api/selectDB', function (req, res) {
        console.log(req.query)
        var params = req.body;
        MongoDB_OPT.DB_selectData('TuTu', 'staff_task', params, function (err, data) {
            if (err) {
                res.end(JSON.stringify(err));
            } else {
                var params = {
                    code: '200',
                    data: data
                };
                res.end(JSON.stringify(params));
            }
        })
    });

    router.post('/api/updateDB', function (req, res) {
        var params = JSON.parse(req.body.data);
        MongoDB_OPT.DB_updateData('TuTu', 'staff_task', params, function (err, data) {
            if (err) {
                res.end(JSON.stringify(err));
            } else {
                var params = {
                    code: '200',
                    data: data
                };
                res.end(JSON.stringify(params));
            }
        })
    });

    router.get('/api/testCon', function (req, res) {
        let string = 'test success';
        res.end(string)
    })
};