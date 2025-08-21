const Bond = require("../models/Bond");

// Generate random love percentage ❤️
const generateLovePercentage = () => {
  return Math.floor(Math.random() * 50) + 50; // between 50-100
};

exports.createBond = async (req, res) => {
  try {
    const { yourName, partnerName } = req.body;
    if (!yourName || !partnerName) {
      return res.status(400).json({ msg: "Please fill both names" });
    }

    const percentage = generateLovePercentage();

    const newBond = new Bond({ yourName, partnerName, percentage });
    await newBond.save();

    res.json(newBond);
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};
