import React from "react";

const Modal = ({ onClose }) => {
  return (
    <div className="modal modal-open backdrop-blur-sm">
      <div
        className="modal-box
        rounded-3xl
        shadow-2xl
        bg-base-100
        border border-gray-200
        text-center
        animate__animated animate__zoomIn"
      >
        {/* Icon */}
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-2xl">⏰</span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-2xl text-gray-800 mb-2">
          Consultation Time
        </h3>

        {/* Content */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Our eco-adventure experts are available from
          <span className="font-semibold text-green-600"> 10:00 AM </span>
          to
          <span className="font-semibold text-green-600"> 8:00 PM</span>.
          <br />
          Please visit us again during these hours.
        </p>

        {/* Action */}
        <div className="modal-action justify-center">
          <button
            onClick={onClose}
            className="btn bg-green-600 hover:bg-green-700 text-white border-0 px-8 rounded-full shadow-md hover:shadow-lg transition"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
