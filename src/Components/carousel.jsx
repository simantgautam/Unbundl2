import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function App() {
  return (
    <div style={{ display: "block", width: "100%", padding: 0 }}>
      <Carousel>
        <Carousel.Item
          interval={2000}
          style={{ position: "relative", textAlign: "center" }}
        >
          <img
            className="d-block w-100"
            src="https://nack.life/cdn/shop/files/desktopbanner_1280x.jpg?v=1692342864"
            alt="Image One"
          />
          <Carousel.Caption
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h1>Rapid Recovery</h1>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={2000}
          style={{ position: "relative", textAlign: "center" }}
        >
          <img
            className="d-block w-100"
            src="https://nack.life/cdn/shop/files/Carousel_Web_Banner_img-01_1280x.jpg?v=1684483241"
            alt="Image Two"
          />
          <Carousel.Caption
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h1>The Starting Line</h1>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={1000}
          style={{ position: "relative", textAlign: "center" }}
        >
          <img
            className="d-block w-100"
            src="https://nack.life/cdn/shop/files/desktopcover_1280x.jpg?v=1695204317"
            alt="Image Three"
          />
          <Carousel.Caption
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h1>Stronger Than Summer Sun</h1>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
