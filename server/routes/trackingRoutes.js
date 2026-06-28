const express = require("express");

const router = express.Router();

const trackingController = require("../controllers/trackingController");

router.get("/:bookingId", trackingController.trackShipment);

module.exports = router;
