const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://eklavyamishra2001:t7s8VM64R8J6ujvV@cluster0.zapiptf.mongodb.net/cuddle", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB Connected ✅");
  } catch (err) {
    console.error("MongoDB Connection Failed ❌", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
