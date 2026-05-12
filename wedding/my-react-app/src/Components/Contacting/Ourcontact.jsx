import React, { useState } from "react";
import "../../assets/Style/Ourcontact.css";
import Footer from "../Footer/Footer";

function Ourcontact() {

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get old data from localStorage
    const existingData =
      JSON.parse(localStorage.getItem("contactData")) || [];

    // Add new form data
    const updatedData = [...existingData, formData];

    // Save to localStorage
    localStorage.setItem("contactData", JSON.stringify(updatedData));

    alert("Contact details saved successfully!");

    // Clear form
    setFormData({
      fullname: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="contact-wrapper was-validated">

        <h1 className="contact-heading">
          <b>Contact Us</b>
        </h1>

        <div className="contact-container">
          <div className="contact-grid">

            {/* Left Side: Form */}
            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="input-group">
                <label>Full Name</label>

                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>E-mail</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Message</label>

                <textarea
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-pill faq-button text-decoration-none btn-lg">
                Contact Us
              </button>

            </form>

            {/* Right Side */}
            <div className="contact-info">

              <div className="info-block">
                <h3>Contact</h3>
                <p>purewed@gmail.com</p>
              </div>

              <div className="info-block">
                <h3>Based in</h3>
                <p>
                  Wedding Events,
                  <br />
                  and programs
                </p>
              </div>

              <div className="social-icons">
                {/* Icons */}
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourcontact;