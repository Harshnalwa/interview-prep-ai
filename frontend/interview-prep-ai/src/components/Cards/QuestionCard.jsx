import React, { useEffect, useRef, useState } from "react";
import { LuChevronDown, LuPin, LuPinOff, LuSparkles } from "react-icons/lu";
import AIResponsePreview from "../../pages/InterviewPrep/components/AIResponsePreview";

const QuestionCard = ({
  question,
  answer,
  onLearnMore,
  isPinned,
  onTogglePin,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight + 10);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-6 overflow-hidden py-6 px-6 shadow-xl shadow-purple-500/10 border border-purple-500/20 group hover:shadow-purple-500/20">
        <div className="flex items-start justify-between cursor-pointer">
          <div className="flex items-start gap-4">
            <span className="text-sm md:text-base font-bold text-purple-400 leading-[18px]">
              Q
            </span>

            <h3
              className="text-sm md:text-base font-medium text-white mr-0 md:mr-20 hover:text-purple-300"
              onClick={toggleExpand}
            >
              {question}
            </h3>
          </div>

          <div className="flex items-center justify-end ml-4 relative">
            <div
              className={`flex ${
                isExpanded ? "md:flex" : "md:hidden group-hover:flex"
              }`}
            >
              <button
                className="flex items-center gap-2 text-sm text-purple-300 font-medium bg-purple-500/10 px-4 py-2 mr-3 rounded-lg border border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-500/20 cursor-pointer"
                onClick={onTogglePin}
              >
                {isPinned ? (
                  <LuPinOff className="text-sm" />
                ) : (
                  <LuPin className="text-sm" />
                )}
              </button>

              <button
                className="flex items-center gap-2 text-sm text-cyan-300 font-medium bg-cyan-500/10 px-4 py-2 mr-3 rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 hover:bg-cyan-500/20 cursor-pointer"
                onClick={() => {
                  setIsExpanded(true);
                  onLearnMore();
                }}
              >
                <LuSparkles />
                <span className="hidden md:block">Learn More</span>
              </button>
            </div>

            <button
              className="text-gray-400 hover:text-purple-300 cursor-pointer"
              onClick={toggleExpand}
            >
              <LuChevronDown
                size={22}
                className={`transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: `${height}px` }}
        >
          <div
            ref={contentRef}
            className="mt-6 text-gray-300 bg-gray-900/70 px-6 py-4 rounded-xl border border-gray-700/50"
          >
             <AIResponsePreview content={answer} />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
