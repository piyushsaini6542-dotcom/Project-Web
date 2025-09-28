import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Left: Contact Form */}
          <div className="col-md-6 mb-4">
            <h5 className="mb-3">Contact Us</h5>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Your Number"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Your Requirement"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-warning">
                Submit
              </button>
            </form>
          </div>

          {/* Right: Company Info */}
          <div className="col-md-6">
            <h5 className="mb-3">Our Company</h5>
            <p>📞 Phone: +91 8506846383</p>
            <p>✉️ Email: piyushsaini6542@gmail.com</p>
            <p>🏢 Address: Ajay Kumar Garg Engineering College, India</p>
            <p>© 2025 MyBrand. All Rights Reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
