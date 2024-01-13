import React from "react";

const Thanks = ({ setShowPopup }) => {
  const popupStyle = {
    // Add your styling for the popup here
    // Example styles:
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
    textAlign: "center",
  };

  return (
    <div style={popupStyle}>
      <p>
        Your message has been recorded. Our Property Expert will get back to you
        soon!
      </p>
      <button
        onClick={() => {
          setShowPopup(false);
        }}
        style={{
          marginTop: "10px",
          padding: "10px",
          backgroundColor: "#0c1d3c",
          color: "#fff",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default Thanks;
