import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="min-h-screen matrix-bg relative overflow-hidden">
      {/* AI Background Effects */}
      <div className="absolute inset-0 neural-grid opacity-10" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 floating-element floating-element-1" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 floating-element floating-element-2" />
      
      <div className="relative z-10">
        <Navbar />
        {user && <div className="relative z-10">{children}</div>}
      </div>
    </div>
  );
};

export default DashboardLayout;
