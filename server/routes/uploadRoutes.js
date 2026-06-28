const express = require("express");
const upload = require("../config/multer");

const router = express.Router();

router.post("/pod", upload.single("pod"), (req, res) => {

    res.json({

        success: true,

        message: "Proof of Delivery uploaded successfully.",

        image: req.file.filename

    });

});

module.exports = router;
