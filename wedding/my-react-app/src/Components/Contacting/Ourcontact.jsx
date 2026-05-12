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
                <p>
  <a href="mailto:purewed@gmail.com" className="text-decoration-none" style={{color:"black"}} >
    purewed@gmail.com 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>

  </a>
</p>
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