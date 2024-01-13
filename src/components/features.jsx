import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const FeaturesData = [
  {
    icon: "fa fa-building-o",
    title: "101",
    text: "2 & 3 BHK Aparts",
  },
  {
    icon: "fa fa-road",
    title: "1.13 Acres",
    text: "Land Parcel",
  },
  {
    icon: "fa fa-building",
    title: "2B + G + 15",
    text: "Structure",
  },
  {
    icon: "fa fa-tree",
    title: "80% ",
    text: "Open Space",
  },
  {
    icon: "fa fa-home",
    title: "74%",
    text: "Carpet Area Efficiency",
  },
  {
    icon: "fa fa-pie-chart",
    title: "39%",
    text: "UDS (Undivided Share)",
  },
  {
    icon: "fa fa-building",
    title: "100% Privacy",
    text: "No Common Walls",
  },
  {
    icon: "fa fa-compass",
    title: "North & East",
    text: "Facing Units",
  },
  {
    icon: "fa fa-check",
    title: "100% Vastu",
    text: "Compliant",
  },
  {
    icon: "fa fa-file-text-o",
    title: "RERA",
    text: "Registered",
  },
  {
    icon: "fa fa-building",
    title: "BBMP and A Khata",
    text: "Approved",
  },
  {
    icon: "fa fa-university",
    title: "All Major Banks",
    text: "Approved",
  },
];

export const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 6 + FeaturesData.length) % FeaturesData.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 6) % FeaturesData.length);
  };

  return (
    <div id="features" className="text-center mt-5 mb-4">
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-evenly",
            padding: "50px 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {FeaturesData
            ? FeaturesData.slice(currentIndex, currentIndex + 6).map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  style={{
                    border: "0px solid #ccc",
                    borderRadius: "10px",
                    padding: "20px",
                    margin: "10px",
                    textAlign: "center",
                    height: "250px",
                    overflow: "hidden",
                  }}
                >
                  <i
                    style={{ fontSize: "50px", marginBottom: "20px" }}
                    className={d.icon}
                  ></i>
                  <h3
                    style={{
                      marginBottom: "10px",
                      overflow: "hidden",
                      height: "40px",
                    }}
                  >
                    {d.title}
                  </h3>
                  <p
                    style={{
                      overflow: "hidden",
                      height: "100px",
                    }}
                  >
                    {d.text}
                  </p>
                </div>
              ))
            : "Loading..."}
          {FeaturesData && FeaturesData.length > 6 && (
            <>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "1200px",
                  cursor: "pointer",
                }}
                onClick={handlePrev}
              >
                <GrFormPrevious
                  size={45}
                  style={{
                    color: "#0c1d3c",
                    marginRight: "20px",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",

                    borderRadius: "2.2rem",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  cursor: "pointer",
                }}
                onClick={handleNext}
              >
                <GrFormNext
                  size={45}
                  style={{
                    color: "#0c1d3c",
                    marginLeft: "20px",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",

                    borderRadius: "2.2rem",
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
