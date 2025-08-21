import React from "react";
import LoveForm from "./components/LoveForm";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-tr from-pink-200 via-purple-200 to-pink-300 animate-gradientBG">
      <div className="relative w-full max-w-md p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl animate-float">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-600 mb-6 text-center animate-bounce">
          💖 Love Bond 💖
        </h1>
        <LoveForm />
      </div>
    </div>
  );
}

export default App;
