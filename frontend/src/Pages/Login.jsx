import React, { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
      <div className="w-full max-w-md bg-gray-900 text-white p-8 rounded-2xl shadow-2xl relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-300 rounded-full p-2 px-6 font-bold shadow-md">
          ⚡ Sakthi Battery Shop
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login to Power Up" : "Sign Up for Energy"}
        </h2>

        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
          />

          <button
            type="submit"
            className="w-full py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-yellow-300"
          >
            {isLogin ? "⚡ Login" : "🔋 Sign Up"}
          </button>
        </form>

        <div className="mt-4 text-center">
          {isLogin ? "New here?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-yellow-400 underline hover:text-yellow-300"
          >
            {isLogin ? "Create Account" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
