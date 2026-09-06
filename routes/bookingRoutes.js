const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const booking = req.body;

    const bookingId = "SSM" + Date.now();

    res.json({
        success: true,
        message: "Shipment booked successfully",
        bookingId: bookingId,
        booking: booking
    });
});

module.exports = router;
