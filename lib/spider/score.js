const axios = require('axios');
const url = require('url');
const cheerio = require('cheerio');

const sequelize = require('../util/mysql')
const t_score_ranking = require('../models/score_ranking')
const { isArray } = require('util');




const axiox_score = axios.create(
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

const main_handler = async function () {
    const res = await axiox_score.get('http://www.jdxzz.com/zxdt/2022/0329/3633619.html');
    const $ = cheerio.load(res.data);

    // console.log(.children('tr').length)
    let $table1 = $('tbody').eq(4);
    let $tableList1 = $table1.children('tr')
    let likerank = $tableList1.map(function (i, el) {
        this === el
        // console.log(el )
        return {
            score: parseInt($(this).find('td').eq(0).text()),
            province_id: '41',
            rank: parseInt($(this).find('td').eq(3).text()),
            rank_people: parseInt($(this).find('td').eq(2).text()),
            rate_range: $(this).find('td').eq(1).text(),
            year: '2019',
            local_type_name: "理科"
        }
        // return $(this).attr('class');
    })
    let arr1 = likerank.get();
    arr1.shift()
    let $table2 = $('tbody').eq(5);
    let $tableList2 = $table2.children('tr')
    let likerank2 = $tableList2.map(function (i, el) {
        this === el
        // console.log(el )
        return {
            score: $(this).find('td').eq(0).text(),
            province_id: '41',
            rank: parseInt($(this).find('td').eq(3).text()),
            rank_people: parseInt($(this).find('td').eq(2).text()),
            rate_range: $(this).find('td').eq(1).text(),
            year: '2019',
            local_type_name: "文科"
        }
        // return $(this).attr('class');
    })
    let arr2 = likerank2.get();
    arr2.shift()
    let score_ranking_arr = arr1.concat(arr2);
    
    for (let n of score_ranking_arr) {
        try {
            let result = await t_score_ranking.count({
                where: {
                    score: n.score,
                    year:n.year,
                    province_id:n.province_id,
                    local_type_name:n.local_type_name,
                }
              });      
              if (result == 0) {
                console.log(`执行插入 ${n.year}年-${n.local_type_name + n.score}--名次：${n.rank}`)
                score_ranking = await t_score_ranking.create(n);
              }

        } catch (e) {
            console.log(e)
        }
        // const newSchoolObj = new schoolsModel(n);
        // await newSchoolObj.save();
    }


}

main_handler()