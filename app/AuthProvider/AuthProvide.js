import React, { useState } from "react";
import AuthContext from "../myContext";
import LandingPage1 from "../LoginRegisterForms/adminlogin/LandingPage1.js";

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [wrongCredentials, setWrongCredentials]=useState("")

  const login = async (email, password) => {
    try {
      const response = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      console.log({ email, password });

      const dataz = await response.json();
      if (dataz.user === null) {
          setIsLoggedIn(false);
          setWrongCredentials("Check your password or email well")
      } else {
        setIsLoggedIn(dataz.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      // let { error } = await supabase.auth.signOut();
      // setIsLoggedIn(false);
      // console.log(error)

      const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const dataz = await response.json();

      setIsLoggedIn(dataz);
    } catch (error) {
      console.log("Unable to logout");
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, wrongCredentials }}>
      {isLoggedIn ? children : <LandingPage1 />}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
