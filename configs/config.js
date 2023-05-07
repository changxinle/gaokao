module.exports = {
  requestRetry: 2, //失败重试次数
  proxy: {
    host: "dyn.horocn.com",
    port: "50000",
    auth:{
      username:"6OOC1637570102547536",
      password:"BImgzrTf95Pn"
    }
  },

  //    数据库配置
  // URL: 'mongodb://127.0.0.1:27017/gaokao', //远端数据库  frp.cngrok.com:10786
  URL: 'mongodb://frp.cngrok.com:10786/gaokao',
  DB: 'gaokao',
  // HOST: '127.0.0.1',
  HOST: '192.168.10.16',
  // PORT: 27017,
  PORT: 27017,
  USERNAME: 'admin',
  PASSWORD: '123456',

  // redis配置
  openRedis: true, // 测试或生产环境必须开启
  redis_host: '127.0.0.1',
  redis_port: 6379,
  redis_psd: 'your redis password',
  redis_db: 0,
  redis_ttl: 12, // 12 小时

};
