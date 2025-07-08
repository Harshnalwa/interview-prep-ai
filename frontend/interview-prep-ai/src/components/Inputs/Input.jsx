import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, label, placeholder, type, id, name, autoComplete }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-300" htmlFor={id || name}>
        {label}
      </label>

      <div className="input-box">
        <input
          id={id || name}
          name={name || id}
          type={
            type == "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-white placeholder-gray-500"
          value={value}
          onChange={(e) => onChange(e)}
          autoComplete={autoComplete}
        />

        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={20}
                className="text-purple-400 cursor-pointer hover:text-purple-300"
                onClick={() => toggleShowPassword()}
              />
            ) : (
              <FaRegEyeSlash
                size={20}
                className="text-gray-500 cursor-pointer hover:text-gray-400"
                onClick={() => toggleShowPassword()}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
