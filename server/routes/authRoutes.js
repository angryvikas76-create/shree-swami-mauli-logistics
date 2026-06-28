const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const User = require("../models/User");

// Admin Login
router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({
                success: false,
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.json({
            success: true,
            token,
            user
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});

module.exports = router;
