import React, { useEffect } from "react";

const ConfirmationPopup = ({ message, close }) => {
  useEffect(() => {
    const timer = setTimeout(close, 10000); // Auto close after 10 seconds
    return () => clearTimeout(timer);
  }, [close]);

  return (
    <div className="confirm-popup">
      <div className="confirm-popup-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
