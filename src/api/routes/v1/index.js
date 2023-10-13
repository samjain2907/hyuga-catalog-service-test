const express = require("express");
const redisClient = require("../../../config/redis");
const catalogRoutes = require("./catalog.route");

const router = express.Router();

/**
 * GET v1/status
 */
router.get("/status", (req, res) => {
    if (redisClient.isReady) return res.send('OK');
    return res.send('redis disconnected.');
});

router.use("/catalog", catalogRoutes);

module.exports = router;
