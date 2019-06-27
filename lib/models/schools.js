/**
 * Created by xinle
 * 学校库对象
 */
var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;
var moment = require('moment')
var SchoolSchema = new Schema({
  _id: {
    type: String,
    'default': shortid.generate
  },
  "school_id": {type: Number},
  "name": String,
  "all": [{type: String}],
  "keywords": [{type: String}],
  "id": String,
  "rank": Number,
  "rank_type": Number,
  "view_total": String,
  "view_month": Number,
  "view_week": Number,
  "level_name": String,
  "type_name": String,
  "dual_class_name": String,
  "f211": Number,
  "belong": String,
  "address": String,
  "level": Number,
  "school_type": Number,
  "admissions": Number,
  "type": Number,
  "county_name": String,
  "data_code": String,
  "is_recruitment": Number,
  "province_name": String,
  "code_enroll": Number,
  "city_name": String,
  "county_id": Number,
  "central": Number,
  "province_id": Number,
  "_version_": Number,
  "department": Number,
  "dual_class": Number,
  "city_id": Number,
  "f985": Number,
  "is_top": Number,
  "special": [{}],
  date: {type: Date, default: Date.now},
  updateDate: {type: Date, default: Date.now}, // 更新时间

});

SchoolSchema.set('toJSON', {getters: true, virtuals: true});
SchoolSchema.set('toObject', {getters: true, virtuals: true});

SchoolSchema.path('date').get(function (v) {
  return moment(v).format("YYYY-MM-DD HH:mm:ss");
});
SchoolSchema.index({school_id: 1},{unique: true});

var Question = mongoose.model("Schools", SchoolSchema);


module.exports = Question;

