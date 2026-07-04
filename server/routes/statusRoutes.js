const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

    res.json({

        success: true,

        company: "Shree Swami Mauli Logistics",

        server: "Running",

        version: "1.0.0"

    });

});

module.exports = router;
