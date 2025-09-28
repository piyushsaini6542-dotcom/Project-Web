import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const testimonialsData = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "Amazing service! Highly recommend them for quality curtains.",
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review: "Professional and quick delivery. Very satisfied!",
  },
  {
    name: "Mark Johnson",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    review: "Excellent products, great customer support.",
  },
  {
    name: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review: "Loved the designs and fabric quality.",
  },
  {
    name: "David Wilson",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    review: "Highly recommend this company for home decor.",
  },
  {
    name: "Sarah Brown",
    image: "https://randomuser.me/api/portraits/women/80.jpg",
    review: "Fantastic service and beautiful curtains!",
  },
];

function Testimonials() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">What Our Clients Say</h2>

      <div className="row g-4 justify-content-center">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="col-md-4 d-flex justify-content-center">
            <div
              className="card p-3 shadow-lg d-flex flex-column align-items-center"
              style={{
                width: "300px", // narrow width
                height: "380px", // tall height
                borderRadius: "10px",
                backgroundColor: "#fdfcf8ff", // visible color
                border: "1px solid #ffd700",
                textAlign: "center",
              }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-circle mb-2"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <h5 className="fw-bold">{testimonial.name}</h5>
              <p style={{ fontSize: "14px", marginTop: "10px" }}>
                "{testimonial.review}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
