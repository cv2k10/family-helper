const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/logout", (req, res) => {
  req.logout();
  res.render("index", { title: "Auth App" });
});

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/redirect
router.get(
  "/facebook",
  passport.authenticate("facebook", {
    scope: "email",
  }),
  function (req, res, next) {
    console.log("facebook auth");
  }
);

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
router.get(
  "/facebook/redirect",
  passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

module.exports = router;
