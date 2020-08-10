const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/logout", (req, res) => {
  // const redirectSent = req.query.redirect;
  // console.log(redirectSent);
  req.logout();
  res.redirect('/'); // redirect back to main page, not current page after logout
});

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/redirect
router.get(
  "/facebook",
  (req, res, next) => {
    const redirectSent = req.query.redirect; // get query string '?redirect=<redirectSent>'
    console.log("Redirect send:" + redirectSent);

    passport.authenticate("facebook", {
      scope: "email",
      state: redirectSent, // send state to fb
    })(req, res, next);
  },
  (req, res, next) => {
    console.log("facebook auth");
  }
);

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
router.get("/facebook/redirect", (req, res, next) => {
  const redirectReceived = req.query.state; // get query string 'tokenstring?state=<redirectReceived>' fr fb
  console.log("Redirect state: " + redirectReceived);
  passport.authenticate("facebook", {
    successRedirect: redirectReceived, // redirect to destination url, where set from state of url '/facebook/?redirect=<redirectSent>
    failureRedirect: "/",
  })(req, res, next);
});

module.exports = router;
