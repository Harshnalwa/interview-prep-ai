import React from 'react'
import ProfileInfoCard from "../Cards/ProfileInfoCard";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 py-2.5 px-4 md:px-0 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between gap-5">
        <Link to="/dashboard">
          <div className="flex items-center gap-3">
            <div className="ai-logo">
              <span className="text-white font-mono text-sm font-bold">AI</span>
            </div>
            <h2 className="text-lg md:text-xl font-medium text-slate-100 leading-5">
              Interview Prep AI
              <span className="block text-xs text-cyan-400 font-mono">Neural Engine v2.0</span>
            </h2>
          </div>
        </Link>

        <ProfileInfoCard />
      </div>
    </div>
  )
}

export default Navbar