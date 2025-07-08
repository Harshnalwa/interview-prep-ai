import React from 'react'
import ProfileInfoCard from "../Cards/ProfileInfoCard";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 bg-gray-900/95 border-b border-gray-700/50 backdrop-blur-md py-2.5 px-4 md:px-0 sticky top-0 z-30 shadow-lg">
      <div className="container mx-auto flex items-center justify-between gap-5">
        <Link to="/dashboard" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
          <div className="w-8 h-8 bg-ai-primary rounded-lg flex items-center justify-center ai-glow">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-white leading-5">
            Interview Prep AI
          </h2>
        </Link>

        <ProfileInfoCard />
      </div>
    </div>
  )
}

export default Navbar