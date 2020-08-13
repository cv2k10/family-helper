const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  created: String,
  fullname: String,
  email: String,
  gender: String,
  age: String,
  health: String,
  healthstatus: String,
  phone: String,
  fulladdress: String,
  service: String,
  otherservice: String,
  date: String,
  period: String,
  time: String,
  area: String,
  pickup: String,
  visit: String,
  price: String,
});

const OrderSchema = new Schema({
  items: {
    type: [ItemSchema],
  },
  userType: {
    // 'facebook' for facebook user login
    type: String,
  },
  userId: {
    // mongodb id, not facebook id
    type: String,
  },
  created: { type: Date, default: Date.now, required: true },
});

OrderSchema.plugin(AutoIncrement, { inc_field: "id" });

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
