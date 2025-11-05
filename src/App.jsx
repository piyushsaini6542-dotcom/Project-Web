// App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import ServicesSection from "./Services.jsx";
import Testimonials from "./Testimonials.jsx";
import Footer from "./Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />

      {/* Hero (always visible) */}
      <Home />

      {/* Show Testimonials only on Home page */}
      {location.pathname === "/" && <Testimonials />}

      {/* Routing for pages */}
      <Routes>
        <Route path="/services" element={<ServicesSection />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
