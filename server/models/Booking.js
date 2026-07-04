const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

  bookingId: {
    type: String,
    required: true,
    unique: true
  },

  senderName: {
    type: String,
    required: true
  },

  senderMobile: {
    type: String,
    required: true
  },

  receiverName: {
    type: String,
    required: true
  },

  receiverMobile: {email: {
    type: String,
    required: true
},

paymentMode: {
    type: String,
    default: "Cash"
},

amount: {
    type: Number,
    default: 0
},
    type: String,
    required: true
  },

  pickupAddress: {
    type: String,
    required: true
  },

  deliveryAddress: {
    type: String,
    required: true
  },

  parcelType: {
    type: String,
    required: true
  },

  numberOfBoxes: {
    type: Number,
    required: true
  },

  weight: {
    type: Number,
    required: true
  },

  length: Number,

  width: Number,

  height: Number,

  status: {
    type: String,
    default: "Booking Confirmed"
  },
driverName: {
    type: String,
    default: ""
},

driverMobile: {
    type: String,
    default: ""
},
  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Booking", bookingSchema);
