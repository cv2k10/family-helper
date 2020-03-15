const express = require("express");
const router = express.Router();

const mailCustomer = require("../components/mailCustomer");

// /api/order POST (order form submit)
router.post("/order", (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Order form data can not be empty"
    });
  }

  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sgMail.send(mailCustomer(req.body.form)).then(() => {}, console.error);

  res.send("Mail succcesully sent.");
});

module.exports = router;