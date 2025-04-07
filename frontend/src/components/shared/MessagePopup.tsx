import React from "react";

interface PopupProps {
  message: string;
  type: string;
  onClose: any;
}

const MessagePopup = ({ message, type, onClose }: PopupProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm z-50">
      <div className="absolute inset-0 pointer-events-auto"></div>{" "}
      {/* This blocks interactions */}
      <div className="relative w-80 p-6 rounded-lg shadow-lg text-black bg-white z-10">
        <p className="text-lg font-bold">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 w-full py-2 bg-white text-black rounded hover:bg-gray-200"
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default MessagePopup;
