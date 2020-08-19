const ensureAuth = (req, res, next) => {
  console.log('ensureAuth')
  if (req.isAuthenticated()) {
    console.log('req.isAuthenticated() = ' + req.isAuthenticated())
    return next();
  }
  res.redirect("/sign-in");
};

module.exports = ensureAuth;
