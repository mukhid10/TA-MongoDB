const express = require("express");
const router = express.Router();

const productRouter = require("./product.route");
const userProfileRouter = require('./userProfileSkiljek.route')
const memberSkilShop = require('./memberSkilShop.route')
const skilFlix = require ('./skilFlix')

router.use("/product", productRouter);
router.use("/user", userProfileRouter);
router.use("/member", memberSkilShop);
router.use('/skilflix', skilFlix)

module.exports = router;