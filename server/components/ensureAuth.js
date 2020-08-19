const ensureAuth = (req, res, next) => {
  console.log('ensureAuth')
  if (req.isAuthenticated()) {
    console.log('req.isAuthenticated() = ' + req.isAuthenticated())
    return next();
  }
  res.redirect("/signin/user/");
};

module.exports = ensureAuth;
