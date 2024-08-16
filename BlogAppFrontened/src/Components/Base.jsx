import React from "react";
import Navbar from "./Navbar";
import CustomNavbar from "./Navbar";

function Base({ title = "Welcome to our website", children }) {
  return (
    <div className="container-fluid p-0 m-0" style={{ backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
      <CustomNavbar />
      {children}
      
    </div>
  );
}

export default Base;
