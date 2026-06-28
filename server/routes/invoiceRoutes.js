const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const invoiceController = require("../controllers/invoiceController");

router.get(
    "/:bookingId",
    auth,
    admin,
    invoiceController.generateInvoice
);

module.exports = router;
