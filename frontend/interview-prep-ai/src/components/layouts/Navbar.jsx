import React from 'react'
import ProfileInfoCard from "../Cards/ProfileInfoCard";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 py-2.5 px-4 md:px-6 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between gap-3 md:gap-5 h-full">
        <Link to="/dashboard" className="flex items-center gap-2 md:gap-3 min-w-0">
          <div className="ai-logo flex-shrink-0">
            <span className="text-white font-mono text-sm font-bold">AI</span>
          </div>
          <h2 className="text-base md:text-xl font-medium text-slate-100 leading-5 truncate">
            <span className="hidden sm:inline">Interview Prep AI</span>
            <span className="sm:hidden">AI Prep</span>
            <span className="block text-xs text-cyan-400 font-mono">Neural Engine v2.0</span>
          </h2>
        </Link>

        <div className="flex-shrink-0">
          <ProfileInfoCard />
        </div>
      </div>
    </div>
  )
}

export default Navbar