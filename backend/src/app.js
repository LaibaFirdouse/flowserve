const express = require("express");
const cors = require("cors");
const serviceRoutes = require("./routes/service.routes");

const app = express();

// app.use(
//     cors({
//         origin: "http://localhost:5173",
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         credentials: true
//     })
// );

app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "http://localhost:5173",
            "https://flowserve-six.vercel.app"
        ]
    })
);

app.use(express.json());

app.use("/api/services", serviceRoutes);

module.exports = app;

const cors = require("cors");

