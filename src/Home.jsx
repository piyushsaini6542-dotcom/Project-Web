import React, { useState, useEffect } from "react";
import ServicesSection from "./Services.jsx";
import Testimonials from "./Testimonials.jsx";

function Home() {
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

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          width: "100%",
          height: "100vh", // Full viewport height
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          transition: "background-image 1s ease-in-out",
        }}
      >
        {/* Overlay for better text readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        ></div>

        {/* Centered Hero Text */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            fontFamily: "'Titillium Web', sans-serif",
            zIndex: 2,
          }}
        >
          <h1 className="display-3 fw-bold">Welcome to Our Curtains</h1>
          <p className="lead">Discover the best curtains for your home</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Services Section */}
      <ServicesSection />
    </div>
    {/* Testimonials Section */}
      <Testimonials />
  );
}

export default Home;
