require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
    res.send("Grocery AI Backend Running");
});
connectDB();
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});