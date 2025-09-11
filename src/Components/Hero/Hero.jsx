import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* Overlay (optional for readability) */}
      <div className="overlay"></div>

      {/* Left text section */}
      <div className="hero-text">
        <h1>Shop the Best Deals Online</h1>
        <p>
          Discover trending fashion, top electronics, and home essentials.
          Enjoy amazing discounts and fast delivery.
        </p>
        <button className="shop-btn">Shop Now</button>
      </div>

      {/* Right image section */}
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
          alt="Ecommerce hero"
        />
      </div>
    </section>
  );
};

export default Hero;
