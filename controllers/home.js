/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.comments = function(req, res) {
  res.render('comments', {
    title: 'Home'
  });
};