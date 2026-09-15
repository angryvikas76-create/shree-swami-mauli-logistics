require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );

    if (req.method === "OPTIONS") {
        return res.sendStatus(204);
    }

    next();
});

connectDB();

app.listen(process.env.PORT || 5000, () => {
    console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
});

app.use("/uploads", express.static("uploads"));

app.use("/api/upload", require("./routes/uploadRoutes"));

app.use("/api/bookings", require("./routes/bookingRoutes"));

app.use("/api/invoice", require("./routes/invoiceRoutes"));

app.use("/api/qr", require("./routes/qrRoutes"));

app.use("/api/dashboard", require("./routes/dashboardRoutes"));

app.use("/api/status", require("./routes/statusRoutes"));
