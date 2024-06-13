import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";


const images = [
  "https://www.monginis.net/wp-content/uploads/2024/02/Moniginis-Banner-1512-X-475-2.png",
  "https://www.monginis.net/wp-content/uploads/2022/12/TallnFancyE_commerce_Banner_1366x375.jpg",
  "https://www.monginis.net/wp-content/uploads/2024/01/Monginis_Ecommerce_1366x375.jpg",
  "https://www.monginis.net/wp-content/uploads/2022/12/Anniversary-cakes-8_Monginis_E_commerce_Banner_Dec_2022_1366x375.jpeg",
];

function HeroSection() {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}>
        {images.map((each, index) => (
          <img key={index} style={{ width: "100%" }} src={each} />
        ))}
      </Zoom>
    </div>
  );
}

export default HeroSection;
