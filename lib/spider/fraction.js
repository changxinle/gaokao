const FractionsModel = require("../models").fraction;
const schoolsModel = require("../models").schools;
const useragents = require('./userAgent');
const mongoose = require('mongoose');
const shortid = require('shortid');
const axios = require('../utils/axios');
const url = require('url');
const wait = require('./wait')
const config = require('../../configs/config');
const tunnel = require('tunnel');




// https://static-data.eol.cn/www/2.0/schoolprovinceindex/2017/462/41/1/1.json

const base = 'https://static-data.eol.cn';
const section = '/www/2.0/schoolprovinceindex/';


const main_handler = async function () {
  let year = "2018";
  let school_id;
  let fenke = "1";
  let province = "41";

  let current = 1;
  let pageSize = 100;
  let queryObj = {};


  const schools = await schoolsModel.find().sort({school_id: 1}).skip(Number(pageSize) * (Number(current) - 1)).limit(Number(pageSize));
  console.log(schools.length)
  const totalItems = await schoolsModel.count(queryObj);
  console.log(totalItems)


  for (let n of schools) {
    console.log(n.name)
    // console.log(n._id)
    school_id = n.school_id;

    // const proxy_re = await axios.get("http://118.24.52.95:5010/get/");
    // let proxyArr = proxy_re.data.split(':');
    // http://113.128.26.158:9999
    // http://47.98.252.17:8888
    let useragent = useragents[parseInt(Math.random() * useragents.length)];
    const axiox_fraction = axios.create(
      {
        headers: {
          // "Proxy-Authorization":"Basic Nk9PQzE2Mzc1NzAxMDI1NDc1MzY6QkltZ3pyVGY5NVBu",
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json;charset=UTF-8',
          'Origin': 'https://gkcx.eol.cn',
          'Referer': 'https://gkcx.eol.cn/school/' + school_id,
          'User-Agent': useragent
        }
      }
    )
    // console.log(useragent)
    const req_data = await axios.get(url.resolve(base, section) + `${year}/${school_id}/${province}/${fenke}/1.json`);
    // console.log(req_data.data)
    let items = req_data.data.data.item;
    for (let item of items) {
      let obj = Object.assign(item, {year: year, school: n._id})

      const FractionsObj = new FractionsModel(obj);
      await FractionsObj.save();

    }
    await wait(2000)

  }

  mongoose.disconnect();
}
main_handler()

