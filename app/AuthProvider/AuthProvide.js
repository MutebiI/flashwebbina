import React, { useState, useEffect } from "react";
import AuthContext from "../myContext";
import LandingPage1 from "../controlledForms/LandingPage1.js";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState("");
  const [mytoken, setMytoken] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setMytoken(token);
      setIsLoggedIn(true);
    }
    else (
      setIsLoggedIn(false)
    )
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      

      const dataz = await response.json();
      if (dataz.user === null) {
        setIsLoggedIn(false);
        setWrongCredentials("Check your password or email well");
      } else {
        
        setIsLoggedIn(dataz.user)  
        localStorage.setItem("token", dataz.session.access_token);
        const token = localStorage.getItem("token");
        setMytoken(token)
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
      setMytoken(false)
      localStorage.removeItem("token");
    } catch (error) {
      console.log("Unable to logout");
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, wrongCredentials }}
    >
      {isLoggedIn ? children : <LandingPage1 />}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
