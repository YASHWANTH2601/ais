import React, { useState, useEffect } from "react";
import "./Carousel.css";

const slides = [
  {
    bookCover:
      "//www.blackstonepublishing.com/cdn/shop/files/Shopify_Banner_20.jpg?v=1734366181&width=600 600w, //www.blackstonepublishing.com/cdn/shop/files/Shopify_Banner_20.jpg?v=1734366181&width=700 700w, //www.blackstonepublishing.com/cdn/shop/files/Shopify_Banner_20.jpg?v=1734366181&width=800 800w, //www.blackstonepublishing.com/cdn/shop/files/Shopify_Banner_20.jpg?v=1734366181&width=1000 1000w, //www.blackstonepublishing.com/cdn/shop/files/Shopify_Banner_20.jpg?v=1734366181&width=1200 1200w, //www.blackstonepublishing.com/cdn/shop/files/Shopify_Banner_20.jpg?v=1734366181&width=1400 1400w, //www.blackstonepublishing.com/cdn/shop/files/Shopify_Banner_20.jpg?v=1734366181&width=1600 1600w, //www.blackstonepublishing.com/cdn/shop/files/Shopify_Banner_20.jpg?v=1734366181&width=1800 1800w, //www.blackstonepublishing.com/cdn/shop/files/Shopify_Banner_20.jpg?v=1734366181&width=2000 2000w, //www.blackstonepublishing.com/cdn/shop/files/Shopify_Banner_20.jpg?v=1734366181&width=2200 2200w, //www.blackstonepublishing.com/cdn/shop/files/Shopify_Banner_20.jpg?v=1734366181&width=2400 2400w, //www.blackstonepublishing.com/cdn/shop/files/Shopify_Banner_20.jpg?v=1734366181&width=2600 2600w, //www.blackstonepublishing.com/cdn/shop/files/Shopify_Banner_20.jpg?v=1734366181&width=2800 2800w, //www.blackstonepublishing.com/cdn/shop/files/Shopify_Banner_20.jpg?v=1734366181&width=3000 3000w",
  },
  {
    bookCover:
      "//www.blackstonepublishing.com/cdn/shop/files/Shopify_Banner_23.jpg?v=1736181355&width=3000",
  },
  {
    bookCover:
      "//www.blackstonepublishing.com/cdn/shop/files/Shopify_Banner_21.jpg?v=1735677745&width=3000",
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // 🔥 Auto-play effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000); // Slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sliderDotContainer">
      <div className="slider-container">
        <button className="nav-button prev" onClick={prevSlide}>
          &lt;
        </button>
        <img
          className="slider-image"
          src={slides[currentSlide].bookCover}
          alt="imgs"
        />

        {/* <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)} // 🔘 Clickable dots
            />
          ))}
        </div> */}

        <button className="nav-button next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
}
