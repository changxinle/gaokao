const schoolsModel = require("../models").schools;
const shortid = require('shortid');
const axios = require('axios');
const url = require('url');
const base = 'https://api.eol.cn';
const section = '/gkcx/api';
const axiox_school = axios.create(
  {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=UTF-8',
      'Origin': 'https://gkcx.eol.cn',
      'Referer': 'https://gkcx.eol.cn/school/search?schoolflag=&argschtype=&province=&recomschprop=&keyWord1=',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36'
    }
  }
)
let total;
const size = 20;
const uri = "apigkcx/api/school/hotlists"
let page = 1;
const main_handler = async function () {
  const res = await axiox_school.get(url.resolve(base, section), {
    params: {
      uri: uri,
      size: size,
      page: page
    }
  });
  total = res.data.data.numFound;

  // console.log(res.data.data.item)
  for (var i = 0; i <= total / size; i++) {

    const res = await axiox_school.get(url.resolve(base, section), {
      params: {
        uri: uri,
        size: size,
        page: page
      }
    });

    for (let n of res.data.data.item) {
      console.log(n)
      const newSchoolObj = new schoolsModel(n);
      await newSchoolObj.save();
    }
    page++;
  }

}
main_handler()