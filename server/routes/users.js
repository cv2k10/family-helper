const express = require('express');
const router = express.Router();

// user login
router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;