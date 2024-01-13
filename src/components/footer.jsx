import React from "react";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        width: "100%",
        background: "#0c1d3c ",
        padding: "2rem 6rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <div>
        {/* Display Inspira Infinity Logo */}
        <img
          src="../img/inspiraLogo.png"
          alt="Inspira Infinity Logo"
          style={{ width: "10rem" }}
        />
      </div>
      <div>
        {/* Display RERA No. */}
        <p style={{ fontWeight: 400, margin: 0, color: "white" }}>
          RERA No. XXXXXXXX
        </p>
      </div>
      <div>
        {/* Display Copyright statement */}
        <h5 style={{ fontWeight: 400, margin: 0, color: "white" }}>
          @ 2023. All Rights Reserved
        </h5>
      </div>

      {/* Media Queries for Mobile and Tablet Views */}
      <style>
        {`
          @media only screen and (max-width: 768px) {
            .footer {
              padding: 2rem;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
          }

          @media only screen and (max-width: 480px) {
            .footer {
              padding: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
