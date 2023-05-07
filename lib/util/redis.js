// 引入 ioredis 包
const redis = require('ioredis')
// 引入配置文件 需要传入给实例对象
const { redisConfig } = require('../../configs/redisConfing')

// 创建实例 连接NoSQL服务器
const client = new redis(redisConfig)
module.exports={
  client
}
