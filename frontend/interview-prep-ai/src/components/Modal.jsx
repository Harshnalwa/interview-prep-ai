import React from "react";

const Modal = ({ children, isOpen, onClose, title, hideHeader }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/60 backdrop-blur-sm">
      {/* Modal Content */}
      <div
        className={`relative flex flex-col bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden border border-slate-700/50 
        `}
      >
        {/* Modal Header */}
        {!hideHeader && (
          <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
            <h3 className="md:text-lg font-medium text-slate-100">{title}</h3>
          </div>
        )}

        <button
          type="button"
          className="text-slate-400 bg-transparent hover:bg-red-500/20 hover:text-red-400 rounded-lg text-sm w-8 h-8 flex justify-center items-center absolute top-4 right-4 cursor-pointer transition-all duration-300 group"
          onClick={onClose}
        >
          <svg
            className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>

        {/* Modal Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
