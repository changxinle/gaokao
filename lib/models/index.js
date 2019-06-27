const mongoose = require('mongoose');
const isProd = process.env.NODE_ENV === 'production'
const config = require('../../configs/config');

if (!isProd) {
    mongoose.connect(config.URL, { useMongoClient: true });
} else {
    mongoose.connect('mongodb://' + config.USERNAME + ':' + config.PASSWORD + '@' + config.HOST + ':' + config.PORT + '/' + config.DB + '', { useMongoClient: true });
}

mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.once('open', () => {
    console.log('connect mongodb success')
})

db.on('error', function (error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});

db.on('close', function () {
    console.log('数据库断开，重新连接数据库');
});

exports.schools = require('./schools');
exports.fraction = require('./fraction');
exports.db =db
