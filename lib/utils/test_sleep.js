const sleep = require('./wait');

async function main(){
 console.log('开始执行');
 await sleep(5000);
 console.log("这是5s后的输出")

}

main()