import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import build1 from "../assets/build.jpg";
import build2 from "../assets/build1.jpg";
import build3 from "../assets/build.jpg";
import build4 from "../assets/build1.jpg";
import build5 from "../assets/build.jpg";
import build6 from "../assets/build1.jpg";
import build7 from "../assets/build.jpg";
import build8 from "../assets/build1.jpg";
import build9 from "../assets/build.jpg";

export const Team = (props) => {
  const images = [
    build1,
    build2,
    build3,
    build4,
    build5,
    build6,
    build7,
    build8,
    build9,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div id="team" className="text-center">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          className="section-title"
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "150px",
          }}
        >
          <h1
            style={{
              marginBottom: "5rem",
              color: "#0c1d3c",
              borderLeft: "7px solid #0c1d3c",
              paddingLeft: "2rem",
              textAlign: "left",
            }}
          >
            <span>
              <b>Creative Visualization</b>
            </span>
          </h1>
        </div>

        {/* Previous button */}
        <GrFormPrevious
          onClick={prevSlide}
          size={45}
          style={{
            cursor: "pointer",
            marginRight: "1rem",
            position: "absolute",
            left: "474px",
          }}
        />

        {/* Container box for displaying three images at a time */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            right: "53px",
          }}
        >
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`build${currentIndex + index + 1}`}
              style={{
                width: "30%",
                height: "30%",
                borderRadius: "0.5rem",
                marginRight: "2rem",
              }}
            />
          ))}
        </div>

        {/* Next button */}
        <GrFormNext
          onClick={nextSlide}
          size={45}
          style={{
            cursor: "pointer",
            marginLeft: "1rem",
            position: "absolute",
            right: "171px",
          }}
        />
      </div>
    </div>
  );
};
