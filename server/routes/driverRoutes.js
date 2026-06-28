const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const driverController = require("../controllers/driverController");

// Get all drivers
router.get("/", auth, admin, driverController.getDrivers);

// Add new driver
router.post("/", auth, admin, driverController.addDriver);

// Update driver
router.put("/:id", auth, admin, driverController.updateDriver);

// Delete driver
router.delete("/:id", auth, admin, driverController.deleteDriver);

module.exports = router;
