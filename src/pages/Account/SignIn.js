import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email) setErrEmail("Enter your email");
    else if (!EmailValidation(email)) setErrEmail("Enter a valid email");
    if (!password) setErrPassword("Enter your password");

    if (email && EmailValidation(email) && password) {
      // Add sign-in logic here
      console.log("Sign-In Successful");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gray-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-600 rounded-full blur-3xl opacity-30"></div>

      {/* Form Card */}
      <div className="bg-gray-100 shadow-lg rounded-lg p-8 w-full max-w-md z-10">
        <div className="mb-6 text-center">
          <img src={logoLight} alt="Logo" className="mx-auto w-20 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900">Sign In</h1>
          <p className="text-gray-600">
            Welcome back! Please enter your credentials to continue.
          </p>
        </div>
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrEmail("");
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500"
              placeholder="you@example.com"
            />
            {errEmail && (
              <p className="text-red-500 text-sm mt-1">{errEmail}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrPassword("");
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500"
              placeholder="••••••••"
            />
            {errPassword && (
              <p className="text-red-500 text-sm mt-1">{errPassword}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-300"
          >
            Sign In
          </button>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-gray-800 font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
