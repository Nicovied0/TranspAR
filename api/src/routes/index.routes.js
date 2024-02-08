const express = require("express");
const router = express.Router();

const authRoute = require("./auth.routes");
const billRoute = require("./bill.routes");
const organizationRoute = require("./organization.routes");

router.use("/auth", authRoute);
router.use("/organization", organizationRoute);
router.use("/bill", billRoute);

module.exports = router;
