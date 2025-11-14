import axios from "axios";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requirement: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://project-web-zwoc.onrender.com/api/contact", formData);
      alert(response.data.message);
      setFormData({ name: "", phone: "", requirement: "" });
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("Failed to submit. Please try again.");
    }
  };

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Left: Contact Form */}
          <div className="col-md-6">
            <h4 className="mb-4">Get in Touch</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="requirement"
                  placeholder="Your Requirement"
                  className="form-control"
                  rows="3"
                  value={formData.requirement}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>

          {/* Right: Company Info */}
          <div className="col-md-6">
            <h4 className="mb-4">Our Company</h4>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Email:</strong> info@dreamcafe.com</p>
            <p><strong>Address:</strong> 123 Cafe Street, Noida, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

