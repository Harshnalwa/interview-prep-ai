import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const ProfileInfoCard = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handelLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };

  return (
    user && (
      <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-xl p-2 border border-gray-700/50 hover:border-purple-500/30 -mt-1">
        <img
          src={user.profileImageUrl || null}
          alt=""
          className="w-8 h-8 bg-gray-600 rounded-full border-2 border-purple-500/30"
        />
        <div>
          <div className="text-sm text-white font-semibold leading-tight">
            {user.name || ""}
          </div>
          <button
            className="text-purple-400 text-xs font-medium cursor-pointer hover:text-purple-300"
            onClick={handelLogout}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default ProfileInfoCard;
