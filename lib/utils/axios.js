
const config = require('../../configs/config');
const axiosRetry = require('axios-retry');
const axios = require('axios');
const tunnel = require('tunnel');
axios.interceptors.request.use((options) => {

  options.httpAgent = tunnel.httpOverHttp({
    proxy: {
      host: config.proxy.host,
      port: parseInt(config.proxy.port),
      // proxyAuth: `${config.proxy.auth.username}:${config.proxy.auth.password}`,
    }
  });
  options.httpsAgent = tunnel.httpsOverHttp({
    proxy: {
      host: config.proxy.host,
      port: parseInt(config.proxy.port),
      // proxyAuth: `${config.proxy.auth.username}:${config.proxy.auth.password}`,
    },
  });

  return options;

})

axiosRetry(axios, {
  retries: config.requestRetry,
  retryCondition: () => true,
  retryDelay: (count, err) => {
    console.log(`Request ${err.config.url} fail, retry attempt #${count}: ${err}`)
    // logger.error(`Request ${err.config.url} fail, retry attempt #${count}: ${err}`);
    return 100;
  },
});



module.exports = axios;
