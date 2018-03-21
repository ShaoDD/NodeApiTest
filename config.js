/**
 * 游客能浏览的页面
 */
exports.isVisitStat = function (url) {
    var enurl = url;
    if (url.indexOf("?") != -1) {
        enurl = url.substring(0, url.indexOf("?"));
    }
    var filter = ["/app/user"];  //游客不能浏览的页面
    for (var i = 0; i < filter.length; i++) {
        if (enurl == filter[i]) {
            return true;
        }
    }
    return false;
};

/**
 * 拦截白名单
 * @param url
 * @returns {boolean}
 */
exports.isWhiteList = function (url) {
    var enurl = url;
    if (url.indexOf("?") != -1) {
        enurl = url.substring(0, url.indexOf("?"));
    }
    var filter = ["/app/user", '/web/login'];
    for (var i = 0; i < filter.length; i++) {
        if (enurl != filter[i]) {
            return true;
        }
    }
    return false;
};

exports.isApiList = function (url) {
    if (url.indexOf("/api") != -1) {
        return true;
    } else {
        return false;
    }
};