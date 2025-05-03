import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from "../Firebase";
export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;
      console.log("User signed in:", user);
    } catch (error) {
      console.error("Google Sign-In error", error);
    }
  };
  return (
    <div>
      <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-300 to-yellow-500">

      <div className="w-full max-w-md bg-gray-900 text-white p-8 rounded-2xl shadow-2xl relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 text-black rounded-full p-2 px-6 font-bold shadow-md">
          ⚡ Sakthi Battery Shop
        </div>

        <h2 className="text-2xl font-bold mb-8 text-center mt-4">
          {isLogin ? "Login to Power Up" : "Sign Up for Energy"}
        </h2>

        <form className="space-y-6">
          {!isLogin && (
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
              />
            </div>
          )}

          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-full bg-blue-400 hover:bg-yellow-500 text-black font-semibold transition-all duration-300 shadow-md hover:shadow-yellow-300"
          >
            {isLogin ? "⚡ Login" : "🔋 Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center">
          {isLogin ? "New here?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-yellow-400 underline hover:text-yellow-300"
          >
            {isLogin ? "Create Account" : "Login"}
          </button>
        </div>
        <div className="flex flex-row pl-25"   onClick={handleGoogleSignIn}><FcGoogle size={25}> </FcGoogle> <p className="text-red">Continue with google</p> </div>
      </div>
    </div>
    </div>
  );
}
