import React from "react";

const Modal = ({ children, isOpen, onClose, title, hideHeader }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/70 backdrop-blur-sm">
      {/* Modal Content */}
      <div
        className="relative flex flex-col bg-gray-900 shadow-2xl rounded-2xl overflow-hidden border border-gray-700/50 w-full max-w-lg mx-4 min-h-[500px]"
      >
        {/* Modal Header */}
        {!hideHeader && (
          <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        )}

        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-700/50 hover:text-white rounded-lg text-sm w-9 h-9 flex justify-center items-center absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
        >
          <svg
            className="w-4 h-4"
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
