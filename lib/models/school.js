const { DataTypes } = require('sequelize')
const sequelize = require('../util/mysql')
//=============user model==============
const t_schools = sequelize.define('t_schools', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    admissions: {
        type: DataTypes.STRING,
        allowNull: true
    },
    answerurl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    belong: {
        type: DataTypes.STRING,
        allowNull: true
    },
    central: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    code_enroll: {
        type: DataTypes.STRING,
        allowNull: true
    },
    colleges_level: {
        type: DataTypes.STRING,
        allowNull: true
    },
    county_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    county_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    department: {
        type: DataTypes.STRING,
        allowNull: true
    },
    doublehigh: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dual_class: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dual_class_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    f211: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    f985: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hightitle: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    inner_rate: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    is_recruitment: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    level: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    level_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    nature: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    nature_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    outer_rate: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    province_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    province_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    rank: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    rank_type: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    school_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    school_type: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    tag_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    type_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    view_month: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    view_total: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    view_total_number: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    view_week: {
        type: DataTypes.STRING,
        allowNull: true,
    }
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

module.exports = t_schools