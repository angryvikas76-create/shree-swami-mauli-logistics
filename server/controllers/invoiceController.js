const PDFDocument = require("pdfkit");
const Booking = require("../models/Booking");

exports.generateInvoice = async (req, res) => {

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

        const doc = new PDFDocument({ margin: 50 });

        res.setHeader("Content-Type", "application/pdf");

        res.setHeader(
            "Content-Disposition",
            `attachment; filename=${booking.bookingId}.pdf`
        );

        doc.pipe(res);

        doc.fontSize(22).text("SHREE SWAMI MAULI LOGISTICS", {
            align: "center"
        });

        doc.moveDown();

        doc.fontSize(18).text("Shipment Invoice");

        doc.moveDown();

        doc.fontSize(12);

        doc.text(`Booking ID : ${booking.bookingId}`);
        doc.text(`Sender : ${booking.senderName}`);
        doc.text(`Receiver : ${booking.receiverName}`);

        doc.moveDown();

        doc.text(`Pickup : ${booking.pickupAddress}`);
        doc.text(`Delivery : ${booking.deliveryAddress}`);

        doc.moveDown();

        doc.text(`Parcel Type : ${booking.parcelType}`);
        doc.text(`Boxes : ${booking.numberOfBoxes}`);
        doc.text(`Weight : ${booking.weight} Kg`);

        doc.moveDown();

        doc.text(`Shipment Status : ${booking.status}`);

        doc.moveDown();

        doc.text("Thank you for choosing");
        doc.text("Shree Swami Mauli Logistics");

        doc.end();

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
