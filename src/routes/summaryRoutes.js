const express = require("express");
const { getSummary } = require("../controllers/summaryController");
const cacheMiddleware = require("../middlewares/cacheMiddleware");

const router = express.Router();

router.get("/", cacheMiddleware, getSummary);

module.exports = router;
