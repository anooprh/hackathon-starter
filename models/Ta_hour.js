var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var mongoose = require('mongoose');

var ta_hour_schema = new mongoose.Schema({
  ta_hour_id: String,
  ta_name: String,
  time: String,
  place: String,
  questions: [questionSchema]
});

var questionSchema = new mongoose.Schema({
    question: String,
    posted_by: String,
    upvoted_by: [String]
});

module.exports = mongoose.model('Ta_hour', ta_hour_schema);
