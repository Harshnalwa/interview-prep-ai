import React, { useState } from "react";

const RoleInfoHeader = ({
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return <div 
      className="bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Cursor-responsive background effect */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />
      
      <div className="container mx-auto px-10 md:px-0 relative z-10">
        <div className="h-[200px] flex flex-col justify-center relative z-10">
          <div className="flex items-start">
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-medium text-white">{role}</h2>
                  <p className="text-sm text-medium text-gray-300 mt-1">
                    {topicsToFocus}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <div className="text-[10px] font-semibold text-white bg-purple-600 px-3 py-1 rounded-full">
              Experience: {experience} {experience == 1 ? "Year" : "Years"}
            </div>

            <div className="text-[10px] font-semibold text-white bg-purple-600 px-3 py-1 rounded-full">
              {questions} Q&A
            </div>

            <div className="text-[10px] font-semibold text-white bg-purple-600 px-3 py-1 rounded-full">
              Last Updated: {lastUpdated}
            </div>
          </div>
        </div>

        <div className="w-[40vw] md:w-[30vw] h-[200px] flex items-center justify-center overflow-hidden absolute top-0 right-0 z-0">
          <div className="w-16 h-16 bg-purple-600 blur-[65px] animate-blob1" />
          <div className="w-16 h-16 bg-purple-500 blur-[65px] animate-blob2" />
          <div className="w-16 h-16 bg-purple-400 blur-[45px] animate-blob3" />
          <div className="w-16 h-16 bg-purple-300 blur-[45px] animate-blob1" />
        </div>
      </div>
    </div>
};

export default RoleInfoHeader;
