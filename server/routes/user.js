const express = require("express");
const ensureAuth = require("../components/ensureAuth");
const userMenuController = require("../components/userMenuController");

const router = express.Router();
router.use(ensureAuth);
router.get('/menu', userMenuController);
// router.get("/my-orders", userMyOrdersController);

module.exports = router;
