import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ServicesSection() {
  useEffect(() => {
    const accordions = document.querySelectorAll(".accordion-collapse");
    accordions.forEach((accordion) => {
      accordion.addEventListener("show.bs.collapse", () => {
        accordion.classList.add("showing");
      });
      accordion.addEventListener("shown.bs.collapse", () => {
        accordion.classList.remove("showing");
      });
    });
  }, []);

  return (
    <div className="w-100 py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <h2 className="text-center mb-4 fw-bold">Our Services</h2>

      <div className="accordion w-75 mx-auto" id="servicesAccordion">
        {/* Service 1 */}
        <div className="accordion-item border-0 shadow-sm mb-3 rounded">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed d-flex justify-content-between align-items-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              style={{ width: "100%", textAlign: "left" }}
            >
              🌐 Web Development <span className="toggle-icon">+</span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#servicesAccordion"
          >
            <div className="accordion-body bg-light">
              We build responsive websites using React, Bootstrap, and modern tools.
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="accordion-item border-0 shadow-sm mb-3 rounded">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed d-flex justify-content-between align-items-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ width: "100%", textAlign: "left" }}
            >
              📱 Mobile Apps <span className="toggle-icon">+</span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#servicesAccordion"
          >
            <div className="accordion-body bg-light">
              We develop cross-platform mobile apps with smooth UI/UX.
            </div>
          </div>
        </div>

        {/* Add more services similarly */}
      </div>
    </div>
  );
}

export default ServicesSection;


