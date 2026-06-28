const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["admin", "driver", "customer"],
        default: "customer"
    },

    mobile: {
        type: String
    },

    address: {
        type: String
    },

    isActive: {
        type: Boolean,
        default: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("User", userSchema);
