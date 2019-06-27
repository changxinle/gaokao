/**
 * Created by xinle
 * 分数线对象
 */
var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;
var moment = require('moment')
const School = require('./schools')
var FractionSchema = new Schema({
  _id: {
    type: String,
    'default': shortid.generate
  },
  "school_id": String,
  "type": String,
  "max": String,
  "min": String,
  "average": String,
  "min_section": String,
  "province": String,
  "batch": String,
  "proscore": String,
  "local_batch_name": String,
  year: String,
  school: {type: String, ref: 'School'}, // 文档作者
  date: {type: Date, default: Date.now},
  updateDate: {type: Date, default: Date.now}, // 更新时间

});

FractionSchema.set('toJSON', {getters: true, virtuals: true});
FractionSchema.set('toObject', {getters: true, virtuals: true});

FractionSchema.path('date').get(function (v) {
  return moment(v).format("YYYY-MM-DD HH:mm:ss");
});

var Fraction = mongoose.model("fractions", FractionSchema);


module.exports = Fraction;

