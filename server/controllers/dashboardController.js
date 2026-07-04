const Booking = require("../models/Booking");
const Driver = require("../models/Driver");
const User = require("../models/User");

exports.getDashboard = async (req, res) => {

    try {

        const totalBookings = await Booking.countDocuments();

        const delivered = await Booking.countDocuments({
            status: "Delivered"
        });

        const inTransit = await Booking.countDocuments({
            status: "In Transit"
        });

        const pending = await Booking.countDocuments({
            status: "Booking Confirmed"
        });

        const totalDrivers = await Driver.countDocuments();

        const totalCustomers = await User.countDocuments({
            role: "customer"
        });

        res.status(200).json({

            success: true,

            dashboard: {

                totalBookings,

                delivered,

                inTransit,

                pending,

                totalDrivers,

                totalCustomers

            }

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};
