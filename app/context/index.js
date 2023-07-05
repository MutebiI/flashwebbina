"use context";
import { createClient } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";

const supabase = createClient(
  "https://pquqecfuohkgeipmcgkt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxdXFlY2Z1b2hrZ2VpcG1jZ2t0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5NTA2MDIsImV4cCI6MjAwMTUyNjYwMn0.aJWq2-mK9HvwRoE9b07XN7GqaNb1f66ICQH0Wv7iT-c"
);
const AuthContext = createContext({});
import LandingPage1 from "../LoginRegisterForms/adminlogin/LandingPage1.js";
import LandingPage2 from "../LoginRegisterForms/adminlogin/LandingPage2.js";
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const onAuthStateChange = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      console.log(user);
      if (user) {
        setUser(user);
        console.log("user-exists below ");
        console.log(user);
        console.log("user exists above");
      }
    } catch (error) {
      console.log(user);
    } finally {
    }
  };
  useEffect(() => {
    onAuthStateChange();
  }, []);
  return (
    <div>
      <AuthContext.Provider value={user}>
        {user ? <LandingPage2 /> : <LandingPage1 />}
      </AuthContext.Provider>
    </div>
  );
};

export const useAuthContext = () => {
  const { user, signOut } = useContext(AuthContext);
  return { user, signOut };
};
