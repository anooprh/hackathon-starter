/**
 * GET /
 * Home page.
 */
var Ta_hour = require('../models/Ta_hour');

exports.index = function (req, res) {
    res.render('home', {
        title: 'Home'
    });
};

exports.ta_hours = function (req, res) {
    var ta_hour_doc;
//    Ta_hour.find(function(err, ta_hour) {
//        if (err) return console.error(err);
//        console.dir(ta_hour);
//    });
//    console.log("before get . . ");
    Ta_hour.findOne({ta_hour_id: req.params.ta_hours_id}, function (err, doc) {
        if (doc) {
            ta_hour_doc = doc;
            console.log("From get method");
            console.log(JSON.stringify(doc, null, "\t"));
            res.render('ta_hours', {
                ta_hours_id: ta_hour_doc.ta_hours_id,
                timeslot: ta_hour_doc.timeslot,
                ta_name: ta_hour_doc.ta_name,
                place: ta_hour_doc.place,
                questions: ta_hour_doc.questions
            });

        } else {
            console.log('no data log for this ta_hours');
            res.render('home', {
                title: 'Home'
            });
        }
    });
};

exports.new_question = function (req, res) {
    var ta_hour_doc;
    Ta_hour.findOne({ta_hour_id: req.params.ta_hours_id}, function (err, doc) {
        if (doc) {
            ta_hour_doc = doc;
            var question = {
                question : req.body.question,
                posted_by : req.body.posted_by,
                upvoted_by : []
            };
            ta_hour_doc.questions.push(question);
            ta_hour_doc.save();
//            console.log("found in new question  " + doc.ta_hour_id);
//            console.log(ta_hour_doc);
//            console.log("redirecting . . to . . " + "/ta_hours/"+req.params.ta_hours_id);
            res.redirect("/ta_hours/"+req.params.ta_hours_id);

        } else {
            console.log('no data log for this ta_hours');
        }
    });
};

exports.upvote_question = function (req, res) {
    console.log(req.params.ta_hours_id);
    console.log(req.params.qid);
    var ta_hour_doc;
//    Ta_hour.find(function(err, ta_hour) {
//        if (err) return console.error(err);
//        console.dir(ta_hour);
//    });
//    console.log("before finding, upvoted by");
    var voted_by = req.body["posted_by"];
    console.log("************");
    console.log(voted_by);
    Ta_hour.findOne({ta_hour_id: req.params.ta_hours_id}, function (err, doc) {
        if (doc) {
            var questions = doc.questions;
            questions[req.params.qid].upvoted_by.push(voted_by);
            Ta_hour.update({ta_hour_id: doc.ta_hour_id}, {$set: {"questions": questions}}, function (err, result) {
                console.log("finished updating");
            });
//            console.log("upvoting question " + req.params.qid + " in "+ doc.ta_hour_id);
//            console.log(JSON.stringify(doc, null, "\t"));
//            doc.questions[req.params.qid].upvoted_by.push(voted_by);
//            Ta_hour.update({ta_hour_id: doc.ta_hour_id}, {upsert: 1}, doc, function(err, thor){
//                if (err) console.error(err);
//                console.log("saving")
//                console.log(JSON.stringify(thor, null, "\t"));
//                console.log(JSON.stringify(doc, null, "\t"));
//                console.log('done saving');
//                Ta_hour.find({}, function(err, result) {
//                    console.log("after save");
//                    console.log(JSON.stringify(result, null, "\t"));
//                })
                res.redirect("/ta_hours/"+req.params.ta_hours_id);
//            });

        } else {
            console.log('no data log for this ta_hours');
        }
    });
};