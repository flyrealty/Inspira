import React from "react";

export const Navigation = (props) => {
  const handleCallButtonClick = () => {
    window.location.href = "tel:98745xxxx";
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "15px",
            }}
          >
            <img
              src="../img/inspiraLogoH.png"
              alt="Logo"
              className="logo-image"
            />
          </a>
        </div>

        <ul className="nav navbar-nav navbar-right">
          <li>
            <button
              onClick={handleCallButtonClick}
              style={{
                display: "inline-block",
                marginLeft: "15px",
                marginTop: "6px",
                padding: "10px 15px",
                backgroundColor: "#0c1d3c",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "-8px",
              }}
            >
              Call Us - 7026170262
            </button>
          </li>
        </ul>
      </div>

      {/* Media Queries for Mobile and Tablet Views */}
      <style>
        {`
          @media only screen and (max-width: 767px) {
            #menu .navbar-header {
              margin-left: 0;
            }

            #menu .navbar-brand {
              margin-left: 0;
            }

            #menu .navbar-toggle {
              margin-right: 15px;
            }

            #menu .navbar-right {
              margin-top: 15px;
              margin-right: 0;
              text-align: center;
            }

            #menu .navbar-nav {
              display: inline-block;
              float: none;
            }

            #menu .navbar-nav > li {
              display: inline-block;
            }

            #menu .navbar-collapse {
              border-top: 1px solid transparent;
              box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
            }

            #menu .navbar-fixed-top {
              top: 0;
              border-width: 0 0 1px;
            }
          }
        `}
      </style>
    </nav>
  );
};
