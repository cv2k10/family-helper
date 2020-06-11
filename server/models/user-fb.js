const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  facebookId: String,
  name: String,
  familyName: String,
  givenName: String,
  email: String,
  pictureUrl: String,
});

const UserFb = mongoose.model("userfb", userSchema);

module.exports = UserFb;
