const mongoose = require("mongoose");

const bondSchema = new mongoose.Schema({
  yourName: { type: String, required: true },
  partnerName: { type: String, required: true },
  percentage: { type: Number, required: true }
});

module.exports = mongoose.model("Bond", bondSchema);
