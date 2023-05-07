
const sequelize = require('../util/mysql')
const t_schools = require('../models/school')
// 引入 redis 实例对象
const {client} = require('../util/redis')


async function main (){
    const { count, rows } = await t_schools.findAndCountAll({
        attributes: ['school_id', 'name'],
        offset: 0,
        limit: 3000
      });
     let list =  rows.map(element => {
        return element.dataValues.school_id
        
      });
      await client.lpush("school-id-list", list);
      let school_id_list = await client.lrange('school-id-list', 0, -1);
      console.log(school_id_list)  
}

main()