"use client";
import React, { useState, useEffect } from "react";

import AuthProvider from "@/app/AuthProvider/AuthProvide.js";
import Webpage from "../adminlogin/webpage/page.js"

function CheckAuth() {
  
  
  return (
    
    <div>
      <AuthProvider>
        <Webpage/>
      </AuthProvider>
      
    </div>
  );
}

export default CheckAuth;
