// const schoolsModel = require("../models").schools;

const sequelize = require('../util/mysql')
const t_schools = require('../models/school')

const shortid = require('shortid');
const axios = require('axios');
const url = require('url');
const base = 'https://api.eol.cn';
const section = '/web/api/';


// sequelize.sync()//{force : true}//during development only
//     .then(async () => {
//         // const user = await User.create({
//         //     email: process.env.TOP_ADMIN_EMAIL,
//         //     password: "123456789",
//         //     type:"admin"
//         // })
//     }).catch((err) => {
//         console.log(err)
//     })


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
const size = 30;
const uri = "apidata/api/gkv3/school/lists"
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
  // console.log(total)
  // return false;
  for (var i = 0; i <= total / size; i++) {
    console.log('查询页码'+page)


    const res = await axiox_school.get(url.resolve(base, section), {
      params: {
        uri: uri,
        size: size,
        page: page
      }
    });

    for (let n of res.data.data.item) {
      try {

        let result = await t_schools.count({
          where: {
            school_id: n.school_id
          }
        });

        if (result == 0) {
          console.log('执行插入'+n.name)
          t_school = await t_schools.create(n);
        }

      } catch (e) {
        console.log(e)
      }
      // const newSchoolObj = new schoolsModel(n);
      // await newSchoolObj.save();
    }
    page++;
  }

}

main_handler()