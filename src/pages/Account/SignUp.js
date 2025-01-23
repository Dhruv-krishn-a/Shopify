import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";

const SignUp = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [checked, setChecked] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCity, setErrCity] = useState("");
  const [errZip, setErrZip] = useState("");

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (checked) {
      if (!clientName) setErrClientName("Enter your name");
      if (!email) setErrEmail("Enter your email");
      else if (!EmailValidation(email)) setErrEmail("Enter a valid email");
      if (!phone) setErrPhone("Enter your phone number");
      if (!password) {
        setErrPassword("Create a password");
      } else if (password.length < 6) {
        setErrPassword("Passwords must be at least 6 characters");
      }
      if (!city) setErrCity("Enter your city name");
      if (!zip) setErrZip("Enter the zip code of your area");

      if (
        clientName &&
        email &&
        EmailValidation(email) &&
        phone &&
        password &&
        password.length >= 6 &&
        city &&
        zip
      ) {
        setSuccessMsg(
          `Hello ${clientName}, welcome to BASK! Check your email at ${email} for more details.`
        );
        setClientName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setCity("");
        setZip("");
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gray-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-600 rounded-full blur-3xl opacity-30"></div>

      {/* Form Card */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl z-10">
        <div className="mb-6 text-center">
          <img src={logoLight} alt="Logo" className="mx-auto w-24 mb-4" />
          <h1 className="text-2xl font-bold text-gray-800">
            Create Your Account
          </h1>
          <p className="text-gray-600">
            Sign up to access personalized services and features.
          </p>
        </div>
        {successMsg ? (
          <div className="text-center">
            <p className="text-green-600 font-semibold mb-4">{successMsg}</p>
            <Link to="/signin">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                Sign In
              </button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => {
                  setClientName(e.target.value);
                  setErrClientName("");
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Dhruv krishna"
              />
              {errClientName && (
                <p className="text-red-500 text-sm mt-1">{errClientName}</p>
              )}
            </div>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@example.com"
              />
              {errEmail && (
                <p className="text-red-500 text-sm mt-1">{errEmail}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setErrPhone("");
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="10 digits"
              />
              {errPhone && (
                <p className="text-red-500 text-sm mt-1">{errPhone}</p>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="••••••••"
              />
              {errPassword && (
                <p className="text-red-500 text-sm mt-1">{errPassword}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  setErrCity("");
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Chennai"
              />
              {errCity && (
                <p className="text-red-500 text-sm mt-1">{errCity}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Zip Code
              </label>
              <input
                type="text"
                value={zip}
                onChange={(e) => {
                  setZip(e.target.value);
                  setErrZip("");
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="10001"
              />
              {errZip && (
                <p className="text-red-500 text-sm mt-1">{errZip}</p>
              )}
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-700">
                I agree to the Terms and Conditions
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
