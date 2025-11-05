import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Services() {
  const services = [
    {
      title: "Custom Curtains",
      description:
        "High-quality custom curtains tailored to your style and preferences.",
      icon: "🪟",
    },
    {
      title: "Interior Design",
      description:
        "Professional interior design consultation to elevate your home or office.",
      icon: "🏡",
    },
    {
      title: "Furniture Solutions",
      description:
        "Modern and elegant furniture that fits perfectly into your space.",
      icon: "🛋️",
    },
    {
      title: "Wall Decor",
      description:
        "Stylish wall decor and art pieces to complete your interiors.",
      icon: "🖼️",
    },
    {
      title: "Smart Home Setup",
      description:
        "Transform your living space into a smart home with IoT integration.",
      icon: "💡",
    },
    {
      title: "Renovation Services",
      description:
        "Complete home and office renovation services with premium finishing.",
      icon: "⚒️",
    },
  ];

  return (
    <div>
      {/* Hero Section with NEW image */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1600&q=80')", // ✅ new image only for Services
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          marginTop: "70px", // adjust for fixed header
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "56px",
            fontWeight: "bold",
            textAlign: "center",
            textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
            fontFamily: "'Titillium Web', sans-serif",
          }}
        >
          Our Services
        </div>
      </div>

      {/* Services Section */}
      <section className="container py-5">
        <h2
          className="text-center mb-5 fw-bold"
          style={{ fontSize: "2.5rem", color: "#222" }}
        >
          What We Offer
        </h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card h-100 shadow-lg border-0 text-center p-4 service-card"
                style={{
                  borderRadius: "15px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div
                  style={{ fontSize: "40px", marginBottom: "15px" }}
                  className="service-icon"
                >
                  {service.icon}
                </div>
                <h5 className="fw-bold mb-3">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Extra Styling */}
      <style>{`
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        .service-icon {
          color: #ff8c00;
        }
      `}</style>
    </div>
  );
}

export default Services;
