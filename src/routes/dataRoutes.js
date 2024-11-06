const express = require("express");
const { getData } = require("../controllers/dataController");
const cacheMiddleware = require("../middlewares/cacheMiddleware");

const router = express.Router();

router.get("/", cacheMiddleware, getData);

module.exports = router;
