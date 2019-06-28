
const request = require('request');

var user = "9IGY1637549931162281"
var password = "jcU9kmy8Ic4q6ClM"
var host = "dyn.horocn.com"
var port = 50000

var proxyUrl = "http://" + user + ":" + password + "@" + host + ":" + port;
console.log(proxyUrl)
var proxiedRequest = request.defaults({'proxy': proxyUrl});

// proxiedRequest.get("https://static-data.eol.cn/www/2.0/schoolprovinceindex/2017/468/41/2/1.json", function (error, response, body) {
//   console.log('error:', error);
//   console.log('statusCode:', response && response.statusCode);
//   console.log('body:', body);
// })
exports.request_promise  = function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
