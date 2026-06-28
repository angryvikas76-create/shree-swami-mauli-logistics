const Driver = require("../models/Driver");

// Get All Drivers
exports.getDrivers = async (req, res) => {

    try {

        const drivers = await Driver.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            total: drivers.length,
            drivers
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Add Driver
exports.addDriver = async (req, res) => {

    try {

        const driver = new Driver(req.body);

        await driver.save();

        res.status(201).json({
            success: true,
            message: "Driver added successfully.",
            driver
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Update Driver
exports.updateDriver = async (req, res) => {

    try {

        const driver = await Driver.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!driver) {
            return res.status(404).json({
                success: false,
                message: "Driver not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Driver updated successfully.",
            driver
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete Driver
exports.deleteDriver = async (req, res) => {

    try {

        const driver = await Driver.findByIdAndDelete(req.params.id);

        if (!driver) {
            return res.status(404).json({
                success: false,
                message: "Driver not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Driver deleted successfully."
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
