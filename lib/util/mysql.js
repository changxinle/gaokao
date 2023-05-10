const Sequelize = require('sequelize')

//connection
const sequelize = new Sequelize(
    'test',
    'root',
    '123456', {
        dialect: 'mysql',
        host: '171.15.105.41',
        port: '15372',
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
          }
    },
    
)

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));


module.exports = sequelize