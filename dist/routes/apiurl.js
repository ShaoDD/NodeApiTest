/**
 * Created by WinterKiSS on 2016/9/10.
 */
/**
 * API URL
 */
var urls = {} ;

/*********************API*******************/
urls["testContent"] = "/api/testpost" ;//测试接口

function geturl(url) {
    return urls[url] ? urls[url] : "";
}

exports.geturl = geturl;