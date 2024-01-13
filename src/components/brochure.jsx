import React, { useState, useEffect } from "react";

const Brochure = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false); // Added state for the checkbox

  useEffect(() => {
    const body = document.body;
    if (showForm) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }

    return () => {
      body.style.overflow = "visible";
    };
  }, [showForm]);

  const handleDownload = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    let valid = true;
    const newFormErrors = { ...formErrors };

    if (formData.Name.trim() === "") {
      newFormErrors.name = "Name is required";
      valid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.Email)) {
      newFormErrors.email = "Invalid email address";
      valid = false;
    }

    const sanitizedPhoneNumber = formData.Phone.replace(/[^0-9]/g, "");
    if (
      sanitizedPhoneNumber.length !== 10 ||
      !/^[6-9]/.test(sanitizedPhoneNumber)
    ) {
      newFormErrors.phoneNumber = "Invalid phone number";
      valid = false;
    }

    setFormErrors(newFormErrors);
    return valid && isCheckboxChecked; // Check if the checkbox is checked
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbyBn5w_GEOfLG1Vokt-RD4-OSdp5CRQa3-K_zdq3mkrvUhUzbHcIfu9PHhK7xPUlTcm/exec",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(formData),
          }
        );

        if (response.ok) {
          setShowThankYou(true);
          setShowForm(false);
        } else {
          console.error("Failed to submit form data");
        }
      } catch (error) {
        console.error("Error submitting form data:", error);
      }
    }
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleThankYouClose = () => {
    setShowThankYou(false);

    window.location.href =
      "https://drive.google.com/file/d/1-8_pfi-BoenE3DLFiDzTX6z0QZa8lFn3/view?usp=drive_link";
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  return (
    <div
      style={{
        textAlign: "center",
        background: "white",
      }}
    >
      <p
        style={{
          margin: "19px auto",
          maxWidth: "1000px",
          fontSize: "50px",
          color: "blue",
        }}
      ></p>
      <button
        onClick={handleDownload}
        style={{
          padding: "10px 15px",
          backgroundColor: "#0c1d3c",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download Brochure
      </button>

      {showForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999, // Set a high z-index value
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "47px",
              borderRadius: "1px",
              maxWidth: "400px",
              margin: "0 auto",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              zIndex: 10000, // Set a higher z-index value
            }}
          >
            <h2
              style={{
                color: "#0c1d3c",
                fontSize: "24px",
                marginBottom: "20px",
              }}
            >
              Brochure
            </h2>
            <form>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                }}
              >
                Name:
              </label>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                placeholder="Your Name"
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "0px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                  background: "transparent",
                }}
              />
              <p style={{ color: "red" }}>{formErrors.name}</p>
              <br />
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                }}
              >
                Email:
              </label>
              <input
                type="email"
                name="Email"
                value={formData.Email}
                placeholder="Email Address"
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "0px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                  background: "transparent",
                }}
              />
              <p style={{ color: "red" }}>{formErrors.email}</p>
              <br />
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                }}
              >
                Phone Number:
              </label>
              <input
                type="tel"
                name="Phone"
                value={formData.Phone}
                placeholder="Phone/Mobile Number"
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "0px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                  background: "transparent",
                }}
              />
              <p style={{ color: "red" }}>{formErrors.phoneNumber}</p>
              <br />
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                }}
              >
                Message:
              </label>
              <textarea
                name="Message"
                value={formData.Message}
                placeholder="Messages (if any)"
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "3px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                  background: "transparent",
                }}
              ></textarea>
              <br />

              {/* Checkbox */}
              <label>
                <input
                  type="checkbox"
                  checked={isCheckboxChecked}
                  onChange={handleCheckboxChange}
                  style={{
                    background: "transparent",
                  }}
                />
                *I authorize company representatives to Call, SMS, Email or
                Whatsapp me about its products and offers. This consent
                overrides any registration for DNC/NDNC.
              </label>
              <br />

              {/* Submit and Cancel Buttons */}
              <button
                type="button"
                onClick={handleCancel}
                style={{
                  background: "#d9534f",
                  color: "#fff",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  marginRight: "10px",
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                style={{
                  background: "#0c1d3c",
                  color: "#fff",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  marginTop: "20px",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {showThankYou && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "47px",
              borderRadius: "1px",
              maxWidth: "400px",
              margin: "0 auto",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2
              style={{
                color: "#0c1d3c",
                fontSize: "24px",
                marginBottom: "20px",
              }}
            >
              Thank You!
            </h2>
            <p>Your form has been submitted successfully.</p>

            <button
              type="button"
              onClick={handleThankYouClose}
              style={{
                background: "#0c1d3c",
                color: "#fff",
                border: "none",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Brochure;
