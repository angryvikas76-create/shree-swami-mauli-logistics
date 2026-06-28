const connectDB = require("./config/db");

connectDB();

app.listen(process.env.PORT || 5000, () => {
    console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
});

app.use("/uploads", express.static("uploads"));

app.use("/api/upload", require("./routes/uploadRoutes"));

app.use("/api/invoice", require("./routes/invoiceRoutes"));

app.use("/api/qr", require("./routes/qrRoutes"));
