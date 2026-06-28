const QRCode = require("qrcode");
const Booking = require("../models/Booking");

exports.generateQR = async (req, res) => {

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

        const trackingURL =
            `${process.env.QR_BASE_URL}${booking.bookingId}`;

        const qrImage = await QRCode.toDataURL(trackingURL);

        res.status(200).json({

            success: true,

            bookingId: booking.bookingId,

            trackingURL,

            qrImage

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};
