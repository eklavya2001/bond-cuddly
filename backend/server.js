const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
connectDB();

app.use(cors({
  origin: "https://bond-cuddly.onrender.com", // frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // allowed HTTP methods
  credentials: true, // allow cookies if needed
}));
app.use(express.json());

app.use("/api/bond", require("./routes/bondRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
