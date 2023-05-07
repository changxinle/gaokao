// 引入 redis 实例对象
const {client} = require('../util/redis')
// Promise async/await 封装
//   ->向redis中定时存储数据
async function setRedis(key, value) {
  // 存储
  await client.set(key, value, (err, data) => {
    // 为key 设定一个时长 单位为S
    client.expire(key, 60)
    if (err) {
      console.log(err);
    }
    console.log('redis store Success!', data);
    return data //成功会返回ok
  })
}
// Promise async/await 封装
//  ->查询 rides 库中是否有该Key 用于判断Token是否过期
async function queryRedis(key) {
  const result = await client.exists(key)
  //  判断该值是否为空 如果为空返回null
  if (result === 0) {
    console.log('result:<','<'+result+'>','This key is null...');
    return null
  }
  console.log('Result:','<'+result+'>','With this value!...');
  return result
}
// Promise async/await 封装
//  ->获取 rides 库中该 Key 的 value
async function getRedis(key) {
  const result = await client.get(key)
  if(result === null){
    console.log('result:','<'+result+'>', 'This key cannot be find...')
    return null
  }
  console.log('Result:','<'+result+'>','Get key success!...');
  return result
}

// Promise async/await 封装
//  ->为 rides 库中的一个key 设定过期的时间 单位为秒(S)
async function timeSetRedis(key,time){
  // 设定时间
  const result = await client.expire(key,time)
  if(result === 0){
    console.log('Result','<'+ result+'>','Set defeated or key not find...');
    return null
  }
  // console.log(result);
  console.log('Result','<'+ result+'>','Set Success!');
  return result
}



async function main() {
    // const numbers = [1, 3, 5, 7, 9];
    // await client.lpush("user-list", numbers);
  
    const popped = await client.lpop("user-list");
    console.log(popped); // 9
    await client.lpush("user-list", [1]);
    // const all = await client.lrange("user-list", 0, -1);
    // console.log(all); // [ '7', '5', '3', '1' ]
  
    // const position = await client.lpos("user-list", 5);
    // console.log(position); // 1
  
// 添加元素到列表中
redis.lpush('list-name', 'item1', 'item2', 'item3');
// 获取列表中的所有元素
redis.lrange('list-name', 0, -1).then((result) => {
    console.log(result);
  });
// 获取列表长度
redis.llen('list-name').then((result) => {
    console.log(result);
  });
// 删除列表中的元素
redis.lrem('list-name', 1, 'item1').then((result) => {
    console.log(result);
  });
// 根据下标获取元素
redis.lindex('list-name', 1, (err, result) => {
    console.log(result); // 输出 'hello'
  });
  redis.lpop("list-name");  // 删除最早的元素
        

    // setTimeout(() => {
    //   // `redis` is in the block mode due to `redis.blpop()`,
    //   // so we duplicate a new connection to invoke LPUSH command.
    //   client.duplicate().lpush("block-list", "hello");
    // }, 1200);
    // const blockPopped = await client.blpop("block-list", 0); // Resolved after 1200ms.
    // console.log(blockPopped); // [ 'block-list', 'hello' ]
  }
  


module.exports={
  setRedis,
  getRedis,
  queryRedis,
  timeSetRedis
}
