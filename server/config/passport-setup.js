const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const keys = require("./keys");
const UserFb = require("../models/user-fb");

require("dotenv").config(); 

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  UserFb.findById(id).then((user) => {
    done(null, user);
  });
});

// To cwitch mode, go to https://developers.facebook.com/apps/239709653809070/fb-login/settings/
// for development, set "In development" mode
// for production, set "In Production" mode
const dev = process.env.NODE_ENV !== 'production';
const callbackURL = dev
  ? process.env.CALLBACK_URL_FACEBOOK_DEV
  : process.env.CALLBACK_URL_FACEBOOK;
console.log('callbackURL: ' + callbackURL);

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebook.appID,
      clientSecret: keys.facebook.appSecret,
      callbackURL: callbackURL,
      profileFields: ["id", "displayName", "photos", "email", "gender", "name"],
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("profile: " + JSON.stringify(profile, null, 2));

      UserFb.findOne({ facebookId: profile.id })
        .then((currentUser) => {
          if (currentUser) {
            // already have the user
            console.log("user is" + currentUser);
            return done(null, currentUser);
          } else {
            new UserFb({
              facebookId: profile.id,
              name: profile.displayName,
              familyName: profile.name.familyName,
              givenName: profile.name.givenName,
              email: profile.emails[0].value,
              pictureUrl: profile.photos[0].value,
            })
            .save()
            .then((newUser) => {
              console.log("new user created: " + newUser);
              return done(null, newUser);
            });
          }
        })
        .catch((err) => {
          console.error(err.message);
          return done(err);
        });
    }
  )
);
