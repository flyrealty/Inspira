import React, { useState, useRef, useEffect } from "react";
import Thanks from "./Thanks"; // Import the Thanks component

export const About = (props) => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
  const contactFormRef = useRef(null);

  useEffect(() => {
    // Update URL when showPopup changes
    if (showPopup) {
      window.history.pushState(null, "", "/about?thanks=true");
    } else {
      window.history.pushState(null, "", "/");
    }
  }, [showPopup]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "Phone") {
      validatePhoneNumber(value);
    }
  }

  function validatePhoneNumber(value) {
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    const isValidLength = sanitizedValue.length === 10;
    const startsWithValidDigit = /^[6-9]/.test(sanitizedValue);

    if (!isValidLength || !startsWithValidDigit) {
      setPhoneError(
        "Phone number should have exactly 10 digits and start with 6, 7, 8, or 9."
      );
    } else {
      setPhoneError("");
    }
  }

  function Submit(e) {
    e.preventDefault();

    if (phoneError) {
      console.log("Invalid phone number");
      return;
    }

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbyBn5w_GEOfLG1Vokt-RD4-OSdp5CRQa3-K_zdq3mkrvUhUzbHcIfu9PHhK7xPUlTcm/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        if (data.toLowerCase().includes("success")) {
          // Show the popup after successful form submission
          setShowPopup(true);

          // Reset the form data
          setFormData({
            Name: "",
            Email: "",
            Phone: "",
            Message: "",
          });

          // Reset phone error
          setPhoneError("");
        } else {
          console.log("Error submitting the form");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    contactFormRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  const inputStyle = {
    display: "block",
    height: "50px",
    marginTop: "20px",
    borderRadius: "4px",
    padding: "14px",
    backgroundColor: "white",
    width: "92%",
    marginLeft: "28px",
  };

  const cardContainerStyle = {
    width: "48%",
    margin: "auto",
    marginLeft: "620px",
    marginTop: "-48px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const submitButtonStyle = {
    width: "30%",
    backgroundColor: "#0c1d3c",
    height: "50px",
    marginTop: "20px",
    borderRadius: "5px",
    padding: "5px",
    marginLeft: "259px",
    cursor: "pointer",
    color: "white",
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div>
          <div
            className="col-xs-12 col-md-6"
            style={{ marginLeft: "540px", marginTop: "-383px" }}
          >
            <div className="about-text">
              <h1
                style={{
                  marginBottom: "3rem",
                  color: "#0c1d3c",
                  borderLeft: "7px solid #0c1d3c",
                  paddingLeft: "2rem",
                }}
              >
                <span>
                  <b>About Inspira Builders</b>
                </span>
              </h1>

              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <p>{props.data ? props.data.paragraph1 : "loading..."}</p>

              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12"> </div>
                <div className="col-lg-6 col-sm-6 col-xs-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1
        style={{
          marginBottom: "5rem",
          color: "#0c1d3c",
          borderLeft: "7px solid #0c1d3c",
          paddingLeft: "2rem",
          marginLeft: "130px",
          marginTop: "53px",
        }}
      >
        <span>
          <b>Contact us</b>
        </span>
      </h1>
      <div style={cardContainerStyle}>
        <div>
          <form
            className="form"
            ref={contactFormRef}
            onSubmit={(e) => {
              e.preventDefault();
              Submit(e);
            }}
          >
            <input
              placeholder="Your Name"
              name="Name"
              type="text"
              value={formData.Name}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              placeholder="Email Address"
              name="Email"
              type="text"
              value={formData.Email}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              placeholder="Phone/Mobile number"
              name="Phone"
              type="text"
              value={formData.Phone}
              onChange={handleInputChange}
              style={inputStyle}
            />
            {phoneError && (
              <p style={{ color: "red", marginLeft: "28px", marginTop: "5px" }}>
                {phoneError}
              </p>
            )}
            <input
              placeholder="Messages (if any)"
              name="Message"
              type="text"
              value={formData.Message}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input value={new Date()} name="DateReceived" hidden readOnly />
            <input name="Name" type="submit" style={submitButtonStyle} />
          </form>
        </div>
        {/* CTA button with fixed position */}
        <button
          onClick={() => {
            // Smooth scroll to the contact form
            contactFormRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }}
          style={{
            position: "fixed",
            top: "220px",
            right: 0,
            transform: "translateY(50%)",
            backgroundColor: "#0c1d3c",
            color: "#fff",
            padding: "20px 10px",
            borderRadius: "0px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            writingMode: "vertical-lr",
            textOrientation: "mixed",
            textAlign: "center",
            zIndex: 9999,
            border: "none",
            outline: "none",
          }}
        >
          Enquiry Form
        </button>
      </div>

      {/* Conditionally render the Thanks component */}
      {showPopup && <Thanks setShowPopup={setShowPopup} />}
    </div>
  );
};
