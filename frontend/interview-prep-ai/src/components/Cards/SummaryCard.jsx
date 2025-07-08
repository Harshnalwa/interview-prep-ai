import React from "react";
import { LuTrash2 } from "react-icons/lu";
import { getInitials } from "../../utils/helper";

const SummaryCard = ({
  colors,
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
  onSelect,
  onDelete,
}) => {
  return (
    <div
      className="bg-ai-card border border-purple-500/20 rounded-2xl p-1 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-purple-500/20 relative group transition-all duration-300 hover:scale-105 hover:ai-glow"
      onClick={onSelect}
    >
      <div
        className="rounded-xl p-6 cursor-pointer relative bg-gradient-to-br from-gray-800/50 to-gray-900/50"
      >
        <div className="flex items-start">
          <div className="flex-shrink-0 w-12 h-12 bg-ai-primary rounded-xl flex items-center justify-center mr-4 shadow-lg">
            <span className="text-lg font-bold text-white">
              {getInitials(role)}
            </span>
          </div>

          {/* Content Container */}
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              {/* Title and Skills */}
              <div>
                <h2 className="text-lg font-bold text-white mb-1">{role}</h2>
                <p className="text-sm text-purple-300 font-medium">
                  {topicsToFocus}
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          className="hidden group-hover:flex items-center gap-2 text-xs text-red-400 font-medium bg-red-500/10 px-3 py-2 rounded-lg border border-red-500/30 hover:border-red-400/50 hover:bg-red-500/20 cursor-pointer absolute top-4 right-4 transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <LuTrash2 />
        </button>
      </div>

      <div className="px-6 pb-6">
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="text-xs font-medium text-purple-300 px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full">
            {experience} {experience == 1 ? "Year" : "Years"}
          </div>

          <div className="text-xs font-medium text-blue-300 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full">
            {questions} Q&A
          </div>

          <div className="text-xs font-medium text-gray-300 px-3 py-1.5 bg-gray-500/10 border border-gray-500/30 rounded-full">
            {lastUpdated}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 font-medium line-clamp-2 mt-4 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
