import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const Navbar = () => {
  return (
    <div  className="carosal" >
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            style={{ height: "400px" }}
            className="d-block w-100"
            src="https://demo.tech2edge.co/samples/assets//images//sacred-games//dilip-parulkar.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Sartaj-Singh</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            style={{ height: "400px", width: "100px" }}
            className="d-block w-100"
            src="https://demo.tech2edge.co/samples/assets//images//sacred-games//sartaj-singh.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Sartaj-Singh</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "400px", width: "100px" }}
            className="d-block w-100"
            src="https://demo.tech2edge.co/samples/assets//images//sacred-games//guruji.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Guruji</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
