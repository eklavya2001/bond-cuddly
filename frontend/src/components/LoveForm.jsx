import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function LoveForm() {
  const [yourName, setYourName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [result, setResult] = useState(null);

  const loveQuotes = [
    "Love is not finding someone to live with, it's finding someone you can't live without. 💖",
    "Your heart knows the way. Follow it. 💌",
    "Every love story is beautiful, but ours is my favorite. 🌹",
    "Millions find their soulmate every day. Are you next? 💘",
    "Love is the closest thing we have to magic. ✨"
  ];

  const randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://bond-cuddly-backends.onrender.com/api/bond", { yourName, partnerName });
      setResult(res.data.percentage);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <motion.input
          whileFocus={{ scale: 1.03, borderColor: "#EC4899" }}
          type="text"
          placeholder="Your Name"
          value={yourName}
          onChange={(e) => setYourName(e.target.value)}
          className="w-full px-5 py-3 rounded-full border-2 border-pink-400 placeholder-pink-500 text-pink-700 font-semibold shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all duration-300"
        />
        <motion.input
          whileFocus={{ scale: 1.03, borderColor: "#8B5CF6" }}
          type="text"
          placeholder="Partner's Name"
          value={partnerName}
          onChange={(e) => setPartnerName(e.target.value)}
          className="w-full px-5 py-3 rounded-full border-2 border-purple-400 placeholder-purple-500 text-purple-700 font-semibold shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-full font-bold text-lg shadow-xl hover:from-pink-600 hover:to-purple-600 transition-all"
        >
          💌 Check Bond 💌
        </motion.button>
      </form>

      {result !== null && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-6 text-3xl sm:text-4xl font-extrabold text-pink-700 text-center animate-pulse"
        >
          ❤️ Your Bond is {result}% Strong ❤️
        </motion.div>
      )}

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center space-y-2"
      >
        <p className="text-sm text-pink-500 font-medium italic">"{randomQuote}"</p>
        <p className="text-xs text-purple-600">Millions of hearts find their match every day ❤️</p>
        <p className="text-[10px] text-gray-400 mt-2">Powered by LoveBot 💖</p>
      </motion.div>
    </div>
  );
}

export default LoveForm;
