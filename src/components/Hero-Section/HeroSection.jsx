import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/Images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4">
                Anytime Anywhere <br /> Learn on your suitable Schedule
              </h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur
                <br />
                adipisicing elit. Libero reiciendis dolorem enim
                <br /> itaque impedit ut repudiandae nesciunt, quam dolore
                sapiente eius ex. Quo soluta consequatur voluptatum omnis autem.
                Eligendi, quisquam?
              </p>
              <div className="search">
                <input type="text" placeholder="Search" />
                <button className="btn">Search</button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
