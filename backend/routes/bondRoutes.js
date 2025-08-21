const express = require("express");
const router = express.Router();
const { createBond } = require("../controllers/bondController");

router.post("/", createBond);

module.exports = router;
