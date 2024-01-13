import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const TestimonialsData = [
  {
    heading: "Important Distances",
    texts: [
      "06 Km from Bellandur",
      "08 Km from HSR Layout",
      "10 Km from Koramangala",
      "12 Km from Whitefield",
      "15 Km from Indiranagar",
      "17 Km from MG Road",
    ],
  },
  {
    heading: "IT Parks",
    texts: [
      "06 Km from Bellandur",
      "02 Km - Wipro Limited SEZ  ",
      "04 Km - Embassy Tech Village",
      "05 Km - Cessna Tech Park",
      "06 Km - Global Technology Park",
    ],
  },
  {
    heading: "Retail & Entertainment",
    texts: [
      "220 M - DMart, Sarjapura Main Road.",
      "01 Km  - Decathlon, Sarjapura Road",
      "03 Km - Zudio, Sarjapura Road",
      "05 Km - Market Square Mall, Sarjapura  Road",
      "03 Km - Sarjapura Social, Marathahalli Road",
    ],
  },
  {
    heading: "Hospitals",
    texts: [
      "06 Km - Cloud Nine Hospital, Bellandur",
      "05 Km - Sakra World Hospital, Marathahalli",
      "05 Km - Manipal Hospital, Sarjapur Road",
      "04 Km - Motherhood Hospital, Sarjapur",
      "02 Km - Narayana Multispeciality Clinic, Sarjapur Road",
    ],
  },
  {
    heading: "Educational Institutions",
    texts: [
      "02 Km - Kidzee Carmelaram, Marathahalli",
      "08 Km - NIFT College, HSR Layout",
      "04 Km - Delhi Public School, Dommasandra",
      "06 Km - Silver Oaks International School, Sarjapur",
      "07 Km - The International School, Sarjapur",
      "07 Km -  DMM High School, Dommasandra",
    ],
  },
  // Add more testimonials as needed
];

export const Testimonials = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, TestimonialsData.length - 1)
    );
  };

  return (
    <div id="testimonials">
      <div className="container">
        <div
          className="section-title"
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "150px",
            marginTop: "51px",
            lineHeight: "1.5rem",
          }}
        >
          <h1
            style={{
              marginBottom: "5rem",
              color: "#0c1d3c",
              borderLeft: "7px solid #0c1d3c",
              paddingLeft: "2rem",
            }}
          >
            <span>
              <b>Location Map</b>
            </span>
          </h1>
        </div>
        <div className="map-wrapper">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15556.118661379636!2d77.7053448!3d12.905814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13ec13fc4539%3A0x4c69135ec7765be7!2sInspira%20Infinity!5e0!3m2!1sen!2sin!4v1704880316478!5m2!1sen!2sin"
            className="location-map"
            style={{
              borderRadius: "5px",
              width: "60%", // Adjust the width as needed
              height: "500px", // Adjust the height as needed
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div
          className="testimonial-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            width: "57%",
            left: "675px",
            bottom: "395px",
          }}
        >
          {TestimonialsData[currentIndex] && (
            <div
              key={`testimonial-${currentIndex}`}
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                textAlign: "center",
                height: "300px",
                width: "60%",
              }}
            >
              <h2
                style={{
                  background: "#0c1d3c",
                  color: "white",
                  padding: "10px",
                  margin: "0",
                }}
              >
                {TestimonialsData[currentIndex].heading}
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  padding: "1px",
                  lineHeight: "1.9",
                  color: "#0c1d3c",
                }}
              >
                {TestimonialsData[currentIndex].texts.map((text, index) => (
                  <li
                    key={index}
                    style={{ fontSize: "15px", margin: "10px 0" }}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {TestimonialsData && TestimonialsData.length > 1 && (
            <>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "90px",
                  cursor: "pointer",
                  display: currentIndex === 0 ? "none" : "block",
                }}
                onClick={handlePrev}
              >
                <GrFormPrevious
                  size={45}
                  style={{
                    color: "#0c1d3c",
                    marginRight: "60px",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                  }}
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "90px",
                  cursor: "pointer",
                  display:
                    currentIndex === TestimonialsData.length - 1
                      ? "none"
                      : "block",
                }}
                onClick={handleNext}
              >
                <GrFormNext
                  size={45}
                  style={{
                    color: "#0c1d3c",
                    marginLeft: "20px",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
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
