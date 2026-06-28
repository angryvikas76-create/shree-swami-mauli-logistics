const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// API Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/tracking", require("./routes/trackingRoutes"));
app.use("/api/drivers", require("./routes/driverRoutes"));

// Home Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        company: "Shree Swami Mauli Logistics",
        message: "Logistics Management API Running Successfully"
    });
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(process.env.PORT || 5000, () => {
        console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    });

})
.catch(err => {
    console.log("❌ Database Connection Failed");
    console.log(err.message);
});
