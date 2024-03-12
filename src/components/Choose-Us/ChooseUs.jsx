import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import chooseImg from "../../assests/Images/why-choose-us.png";
import "./chooseus.css";
import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
                voluptatem ipsa unde aliquid amet, explicabo consequuntur! Quia,
                libero! Ea, pariatur perspiciatis vero nemo iure numquam. Quod,
                corporis nobis. Corrupti, itaque? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quasi optio doloribus, cum porro
                voluptatum animi explicabo distinctio id aperiam, deleniti
                voluptates provident molestias vel rem sequi. Tenetur porro
                debitis cupiditate?
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=_g45BJCAXu4"
                  controls
                  width="100%"
                  height="300px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}
              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
