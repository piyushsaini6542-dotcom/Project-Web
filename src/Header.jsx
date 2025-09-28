import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-dark bg-dark" : "navbar-dark bg-transparent"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MyBrand
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
            <li className="nav-item me-5">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown me-5">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                About
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Our Story
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Team
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown me-5">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Service 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Service 2
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

