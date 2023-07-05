"use client";
import React, { useState, useEffect } from "react";
import AuthContext from "../../myContext";
import { useContext } from "react";
import logo from "../../images/mueletechLogo.PNG";
export const revalidate = 10;
const LoginForm = () => {
  const { login, wrongCredentials } = useContext(AuthContext);

    useEffect(() => {
      // Disable navigating back to the previous page
      window.history.pushState(null, document.title, window.location.href);
      window.addEventListener("popstate", preventBackNavigation);

      return () => {
        // Enable navigating back to the previous page when leaving the current page
        window.removeEventListener("popstate", preventBackNavigation);
      };
    }, []);

    const preventBackNavigation = () => {
      window.history.forward();
    };
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
      login(email, password)
    
  
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-blue-400">
        <div className="w-30 h-30 bg-yellow-400">
          <img src={logo.src} alt="Logo" width={100} height={100} />
        </div>
        <form
          className="lg:w-[500px] md:w-[400px] sm:w-[350px] p-4 border border-gray-300 shadow-md rounded"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl font-bold mb-4">Admin Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>{" "}
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {<b className="text-red-700">{wrongCredentials}</b>}
          {/* {<h1 className="text-red-700">{invalidLogin}</h1>} */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
