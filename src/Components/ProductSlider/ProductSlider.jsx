import React, { useState } from "react";

const ProductSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="image-slider">
      {/* Большое активное изображение */}
      <div className="main-image-container">
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex}`}
          className="main-image"
        />
      </div>

      {/* Превью-галерея */}
      <div className="thumbnail-container">
        {images.map((img, index) => (
          <div
            key={index}
            className={`thumbnail ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={img}
              alt={`Thumbnail ${index}`}
              className="thumbnail-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
