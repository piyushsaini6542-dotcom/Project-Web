import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed-top ${scrolled ? "bg-dark shadow-sm" : "bg-transparent"}`}
      style={{
        transition: "background-color 0.4s ease, box-shadow 0.4s ease",
        zIndex: 1000,
      }}
    >
      <nav className="navbar navbar-expand-lg container py-3">
        {/* Brand Logo */}
        <NavLink
          className="navbar-brand fw-bold fs-3 text-gradient"
          to="/"
          style={{
            background: "linear-gradient(90deg, #ff8c00, #ffdd00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          MyCompany
        </NavLink>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["Home", "Services", "About", "Contact"].map((page) => (
              <li className="nav-item" key={page}>
                <NavLink
                  to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                  className={({ isActive }) =>
                    `nav-link px-3 ${
                      isActive
                        ? "fw-bold active-link"
                        : "text-light hover-underline"
                    }`
                  }
                  style={{
                    margin: "0 8px",
                    fontSize: "16px",
                    transition: "all 0.3s ease",
                  }}
                >
                  {page}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Inline CSS for Custom Effects */}
      <style>{`
        .hover-underline {
          position: relative;
        }
        .hover-underline::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          display: block;
          margin-top: 5px;
          right: 0;
          background: #ffdd00;
          transition: width 0.3s ease, left 0.3s ease;
        }
        .hover-underline:hover::after {
          width: 100%;
          left: 0;
        }
        .active-link {
          color: #ffdd00 !important;
          border-bottom: 2px solid #ffdd00;
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </header>
  );
}

export default Header;


