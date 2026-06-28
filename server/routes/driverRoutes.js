const express = require("express");
const Driver = require("../models/Driver");

const router = express.Router();

// Get All Drivers
router.get("/", async (req, res) => {

    try {

        const drivers = await Driver.find();

        res.json(drivers);

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});

// Add Driver
router.post("/", async (req, res) => {

    try {

        const driver = new Driver(req.body);

        await driver.save();

        res.status(201).json({
            success: true,
            driver
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});

module.exports = router;
