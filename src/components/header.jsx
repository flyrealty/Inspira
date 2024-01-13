import React from "react";

import layer1 from "../assets/Layer1.jpg";
import layer2 from "../assets/Layer2.png";
import intro from "../assets/intro-bg.jpg";

export const Header = (props) => {
  const introStyle = {
    backgroundImage: `url(${intro})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto", // Stretch the image's width
    marginTop: "60px",
  };

  return (
    <header id="header">
      <div className="intro" style={introStyle}>
        <div className="overlay">
          <div className="container">
            <div className="col-md-1"></div>
            <div className="row">
              <div className="col-md-10 col-md-offset-2 intro-text">
                <h1>
                  <b>
                    {/* Title and paragraph moved here */}
                    {props.data ? props.data.title1 : "Loading"}
                    <span></span>
                  </b>
                </h1>
                <p>{props.data ? props.data.paragraph1 : "Loading"}</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "960px",
            width: "100%",
            marginLeft: "100px",
            position: "relative",
          }}
        >
          <div
            style={{
              margin: "3rem auto",
              marginRight: "100px",
              position: "relative",
              marginLeft: "95px",
              width: "70%",
            }}
          >
            {/* New container for images with absolute positioning */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                display: "flex",
                alignItems: "center",
                marginLeft: "655px",
                justifyContent: "space-between",
              }}
            >
              <img
                src={layer1}
                alt="Layer 1"
                style={{
                  width: "250px",
                  marginRight: "10px",
                  borderRadius: "5px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                }}
              />
              <img
                src={layer2}
                alt="Layer 2"
                style={{
                  width: "243px",
                  borderRadius: "5px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                }}
              />
            </div>

            <h1
              style={{
                textAlign: "left",
                marginBottom: "5rem",
                color: "#0c1d3c",
                borderLeft: "7px solid #0c1d3c",
                paddingLeft: "4rem",
                marginRight: "50px",
                marginTop: "80px",
              }}
            >
              {props.data ? props.data.title : "Loading"}
              <br />
              <span>Lifestyle and Connectivity!</span>
            </h1>

            <div style={{ textAlign: "left", paddingRight: "5rem" }}>
              <p
                style={{
                  fontSize: "2rem",
                  lineHeight: "1.2",
                  color: "#0c1d3c",
                }}
              >
                <b>Inspira Infinity,</b>
                {props.data ? props.data.paragraph : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
