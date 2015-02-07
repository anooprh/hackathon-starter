/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.ta_hours = function(req, res) {
  res.render('ta_hours', {
      ta_hours_id: req.params.ta_hours_id,
      timeslot: '9.00 AM - 11.00 AM',
      ta_name: 'Alexander the great',
      place: 'Egypt',
      questions: [
          {"question" : "Where is USA? ", "posted_by" : "Columbus", "upvoted_by": ["Amerigo Vesapuggi"]},
          {"question" : "Where is Carribean? ", "posted_by" : "someone", "upvoted_by": []}
      ]
  });
};

exports.new_question = function(req, res) {
  console.log(req.params.ta_hours_id);
  console.log(req.body.question);
  res.render('ta_hours', {
      ta_hours_id: req.params.ta_hours_id,
      timeslot: '9.00 AM - 11.00 AM',
      ta_name: 'Alexander the great',
      place: 'Egypt',
      questions: [
          {"question" : "Where is USA? ", "posted_by" : "Columbus", "upvoted_by": ["Amerigo Vesapuggi"]},
          {"question" : "Where is Carribean? ", "posted_by" : "someone", "upvoted_by": []}
      ]
  });
};

exports.upvote_question = function(req, res) {
    console.log(req.params.ta_hours_id);
    console.log(req.params.qid);
  res.render('ta_hours', {
      ta_hours_id: req.params.ta_hours_id,
      timeslot: '9.00 AM - 11.00 AM',
      ta_name: 'Alexander the great',
      place: 'Egypt',
      questions: [
          {"question" : "Where is USA? ", "posted_by" : "Columbus", "upvoted_by": ["Amerigo Vesapuggi"]},
          {"question" : "Where is Carribean? ", "posted_by" : "someone", "upvoted_by": []}
      ]
  });
};