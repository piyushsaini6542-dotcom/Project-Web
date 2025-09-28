import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import ServicesSection from './Services.jsx';
import Testimonials from './Testimonials.jsx';
import Footer from './Footer.jsx';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const location = useLocation(); // detect route

  // Background images
  const images = [
    "https://pretfab.com/wp-content/uploads/2022/03/about-banner-1.jpg",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://static.vecteezy.com/system/resources/thumbnails/036/078/423/small/ai-generated-vintage-living-room-interior-design-with-sofa-minimal-aesthetic-3d-rendered-photo.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Hero text
  const heroTitle = location.pathname === "/services" ? "Our Services" : "Find Your Dream Property";
  const heroSubtext = location.pathname === "/services"
    ? "Explore all the services we offer"
    : "Discover the best homes and offices near you";

  // Hero height based on page
  const heroHeight = location.pathname === "/services" ? "60vh" : "100vh";

  return (
    <>
      <Header transparent={true} />

      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: heroHeight,
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1,
          }}
        ></div>

        {/* Hero text */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            fontFamily: "'Titillium Web', sans-serif",
            zIndex: 2,
          }}
        >
          <h1 className="fw-bold display-4">{heroTitle}</h1>
          <p className="lead">{heroSubtext}</p>

          {/* Golden Divider */}
          <div
            style={{
              width: "80px",
              height: "2px",
              backgroundColor: "gold",
              margin: "15px auto",
            }}
          ></div>

          {/* Search bar only on home */}
          {location.pathname === "/" && (
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
          )}
        </div>
      </div>

      {/* Services Section only on /services */}
      {location.pathname === "/services" && <ServicesSection />}

      {/* Testimonials Section */}
            <Testimonials />

      <Footer/>
    </>
  );
}

export default App;

