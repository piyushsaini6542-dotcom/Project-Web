// Home.jsx
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const images = [
    "https://pretfab.com/wp-content/uploads/2022/03/about-banner-1.jpg",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0",
    "https://png.pngtree.com/thumb_back/fh260/background/20240408/pngtree-curtain-window-interior-decoration-in-living-room-image_15651980.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1,
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            zIndex: 2,
          }}
        >
          <h1 className="fw-bold display-4">Find Your Dream Property</h1>
          <p className="lead">Discover the best homes and offices near you</p>
          <div
            style={{
              width: "80px",
              height: "2px",
              backgroundColor: "gold",
              margin: "15px auto",
            }}
          ></div>

          {/* Search Bar */}
          <div className="d-flex justify-content-center mt-3">
            <select className="form-select me-2" style={{ width: "200px" }}>
              <option>Select Location</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
            </select>

            <select className="form-select me-2" style={{ width: "200px" }}>
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Office</option>
              <option>Plot</option>
            </select>

            <button className="btn btn-warning fw-bold px-4">Search</button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-5 text-center bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4">About Us</h2>
          <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
            Welcome to <strong>DreamNest Properties</strong> — your trusted partner
            in finding beautiful homes, commercial spaces, and investment opportunities.
            We believe in simplifying real estate, making it more transparent and accessible
            for everyone. Our expert team is dedicated to helping you find a place that truly
            feels like home.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
