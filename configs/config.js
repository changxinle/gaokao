module.exports = {


  //    数据库配置
  // URL: 'mongodb://127.0.0.1:27017/gaokao', //远端数据库  frp.cngrok.com:10786
  URL: 'mongodb://frp.cngrok.com:10786/gaokao',
  DB: 'gaokao',
  // HOST: '127.0.0.1',
  HOST: 'frp.cngrok.com',
  // PORT: 27017,
  PORT: 10786,
  USERNAME: 'root',
  PASSWORD: 'root',

  // redis配置
  openRedis: true, // 测试或生产环境必须开启
  redis_host: '127.0.0.1',
  redis_port: 6379,
  redis_psd: 'your redis password',
  redis_db: 0,
  redis_ttl: 12, // 12 小时

};
