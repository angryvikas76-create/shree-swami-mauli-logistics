const Booking = require("../models/Booking");
const { v4: uuidv4 } = require("uuid");

// Create a new booking
exports.createBooking = async (req, res) => {
    try {
        const booking = new Booking({
            bookingId: "SSM-" + uuidv4().substring(0, 8).toUpperCase(),
            senderName: req.body.senderName,
            senderMobile: req.body.senderMobile,
            receiverName: req.body.receiverName,
            receiverMobile: req.body.receiverMobile,
            pickupAddress: req.body.pickupAddress,
            deliveryAddress: req.body.deliveryAddress,
            parcelType: req.body.parcelType,
            numberOfBoxes: req.body.numberOfBoxes,
            weight: req.body.weight,
            length: req.body.length,
            width: req.body.width,
            height: req.body.height,
            status: "Booking Confirmed"
        });

        await booking.save();

        res.status(201).json({
            success: true,
            message: "Booking created successfully.",
            booking
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get all bookings
exports.getBookings = async (req, res) => {

    try {

        const bookings = await Booking.find().sort({
            createdAt: -1
        });

        res.status(200).json({
            success: true,
            total: bookings.length,
            bookings
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get booking by Booking ID
exports.getBookingById = async (req, res) => {

    try {

        const booking = await Booking.findOne({
            bookingId: req.params.bookingId
        });

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found."
            });
        }

        res.status(200).json({
            success: true,
            booking
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Update shipment status
exports.updateBookingStatus = async (req, res) => {

    try {

        const booking = await Booking.findOneAndUpdate(
            { bookingId: req.params.bookingId },
            { status: req.body.status },
            { new: true }
        );

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Shipment status updated successfully.",
            booking
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete booking
exports.deleteBooking = async (req, res) => {

    try {

        const booking = await Booking.findOneAndDelete({
            bookingId: req.params.bookingId
        });

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Booking deleted successfully."
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
