import React, { useState, useRef, useEffect } from "react";
import { LuUser, LuLogOut, LuPen, LuChevronDown } from "react-icons/lu";

const ProfileDropdown = ({ user, onEditProfile, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleEditProfile = () => {
    setIsOpen(false);
    onEditProfile();
  };

  const handleLogout = () => {
    setIsOpen(false);
    onLogout();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 md:gap-3 p-1 md:p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200 group"
      >
        {/* Profile Image */}
        <div className="relative">
          <img
            src={user?.profileImageUrl}
            alt="Profile"
            className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full object-cover ring-2 ring-slate-600/50 group-hover:ring-slate-500 transition-all duration-200"
          />
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
        </div>

        {/* User Info (Hidden on small screens) */}
        <div className="hidden md:block text-left">
          <div className="text-sm font-medium text-slate-100 leading-tight">
            {user?.name || "User"}
          </div>
          <div className="text-xs text-slate-400">
            {user?.email || "user@example.com"}
          </div>
        </div>

        {/* Dropdown Arrow */}
        <LuChevronDown 
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <div className="fixed inset-0 z-40 md:hidden" onClick={() => setIsOpen(false)} />
          
          <div className="absolute right-0 mt-2 w-56 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700/50 z-50 overflow-hidden">
            {/* User Info Header (Visible on mobile in dropdown) */}
            <div className="md:hidden px-4 py-3 border-b border-slate-700/50">
              <div className="text-sm font-medium text-slate-100">
                {user?.name || "User"}
              </div>
              <div className="text-xs text-slate-400">
                {user?.email || "user@example.com"}
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              <button
                onClick={handleEditProfile}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-slate-200 hover:bg-slate-700/50 transition-colors duration-200 text-sm"
              >
                <LuPen className="w-4 h-4" />
                Edit Profile
              </button>
              
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-red-400 hover:bg-red-500/10 transition-colors duration-200 text-sm"
              >
                <LuLogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileDropdown;
