const express = require("express");
const Booking = require("../models/Booking");

const router = express.Router();

// Track Shipment
router.get("/:bookingId", async (req, res) => {

    try {

        const booking = await Booking.findOne({
            bookingId: req.params.bookingId
        });

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Shipment Not Found"
            });
        }

        res.json({
            success: true,
            shipment: {
                bookingId: booking.bookingId,
                senderName: booking.senderName,
                receiverName: booking.receiverName,
                pickupAddress: booking.pickupAddress,
                deliveryAddress: booking.deliveryAddress,
                parcelType: booking.parcelType,
                numberOfBoxes: booking.numberOfBoxes,
                weight: booking.weight,
                length: booking.length,
                width: booking.width,
                height: booking.height,
                status: booking.status,
                bookingDate: booking.createdAt
            }
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});

module.exports = router;
