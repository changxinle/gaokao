const { DataTypes } = require('sequelize')
const sequelize = require('../util/mysql')
//=============user model==============
const t_score_ranking = sequelize.define('t_score_ranking', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
  
    province_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    
    rank: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    rank_people: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    rate_range: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    year: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    local_type_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
   

})


sequelize.sync()//{force : true}//during development only
    .then(async () => {
        // const user = await User.create({
        //     email: process.env.TOP_ADMIN_EMAIL,
        //     password: "123456789",
        //     type:"admin"
        // })
    }).catch((err) => {
        console.log(err)
    })

module.exports = t_score_ranking