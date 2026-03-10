const express = require("express");
const cors = require("cors");
const serviceRoutes = require("./routes/service.routes");

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    })
);

app.use(express.json());

app.use("/api/services", serviceRoutes);

module.exports = app;