const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    mobile: {
        type: String,
        required: true
    },

    licenseNumber: {
        type: String,
        required: true
    },

    vehicleNumber: {
        type: String,
        required: true
    },

    vehicleType: {
        type: String
    },

    status: {
        type: String,
        default: "Available"
    },

    currentLocation: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Driver", driverSchema);
