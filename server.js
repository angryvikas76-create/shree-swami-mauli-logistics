require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

connectDB();

app.listen(process.env.PORT || 5000, () => {
    console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
});

app.use("/uploads", express.static("uploads"));

app.use("/api/upload", require("./routes/uploadRoutes"));

app.use("/api/invoice", require("./routes/invoiceRoutes"));

app.use("/api/qr", require("./routes/qrRoutes"));

app.use("/api/dashboard", require("./routes/dashboardRoutes"));

app.use("/api/status", require("./routes/statusRoutes"));
