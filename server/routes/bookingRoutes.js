const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

const Booking = require("../models/Booking");

// Create Booking
router.post("/", async (req, res) => {

    try {

        const booking = new Booking({

            bookingId: "SSM-" + uuidv4().substring(0,8).toUpperCase(),

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

            height: req.body.height

        });

        await booking.save();

        res.status(201).json({
            success: true,
            message: "Booking Created Successfully",
            booking
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});

// Get All Bookings

router.get("/", auth, admin, async (req, res) => {

    try {

        const bookings = await Booking.find().sort({createdAt:-1});

        res.json(bookings);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

// Get Booking by Booking ID

router.put("/:bookingId", auth, admin, async (req, res) => {

    try{

        const booking = await Booking.findOne({
            bookingId:req.params.bookingId
        });

        if(!booking){

            return res.status(404).json({
                success:false,
                message:"Booking Not Found"
            });

        }

        res.json(booking);

    }catch(err){

        res.status(500).json({
            message:err.message
        });

    }

});

// Update Shipment Status

router.put("/:bookingId", async (req,res)=>{

    try{

        const booking = await Booking.findOneAndUpdate(

            {bookingId:req.params.bookingId},

            {status:req.body.status},

            {new:true}

        );

        res.json({
            success:true,
            booking
        });

    }catch(err){

        res.status(500).json({
            message:err.message
        });

    }

});

// Delete Booking

router.delete("/:bookingId", async (req,res)=>{

    try{

        await Booking.findOneAndDelete({
            bookingId:req.params.bookingId
        });

        res.json({
            success:true,
            message:"Booking Deleted"
        });

    }catch(err){

        res.status(500).json({
            message:err.message
        });

    }

});

module.exports = router;
