// const axios = require('../utils/axios');
const axios = require('../utils/axios');
const useragents = require('./userAgent');
const config = require('../../configs/config');
const tunnel = require('tunnel');


async function main() {

  let useragent = useragents[parseInt(Math.random() * useragents.length)];
  // const proxy_re = await axios.get("http://118.24.52.95:5010/get/");
  // let proxyArr = proxy_re.data.split(':');
  // 211.87.234.39:8503    https://117.74.65.29:7890
  const axiox_test = axios.create(
    {
      headers: {
        // "Proxy-Authorization":"Basic Nk9PQzE2Mzc1NzAxMDI1NDc1MzY6QkltZ3pyVGY5NVBu",
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
        'Origin': 'https://gkcx.eol.cn',
        'Referer': 'https://gkcx.eol.cn/school/' + 468,
        'User-Agent': useragent
      },
    }
  )
 for (let i =1;i<10000;i++) {
  const re_data = await axiox_test.get('https://api.eol.cn/web/api/?local_province_id=41&local_type_id=2&page=1&school_id=62&size=10&uri=apidata/api/gk/score/province&year=2022')
  // const re_data= await axiox_test.get('http://www.baidu.com')
  console.log(re_data.data) }
  
}

main()


// const request = require('request');
//
// var user = "6OOC1637570102547536"
// var password = "BImgzrTf95Pn"
// var host = "dyn.horocn.com"
// var port = 50000
//
// var proxyUrl = "http://" + user + ":" + password + "@" + host + ":" + port;
// console.log(proxyUrl)
// // proxyUrl = "http://125.111.117.127:34448"
// var proxiedRequest = request.defaults({'proxy': proxyUrl});
//
// proxiedRequest.get("https://static-data.eol.cn/www/2.0/schoolprovinceindex/2017/468/41/2/1.json", function (error, response, body) {
//   console.log('error:', error);
//   console.log('statusCode:', response && response.statusCode);
//   console.log('body:', body);
// })
