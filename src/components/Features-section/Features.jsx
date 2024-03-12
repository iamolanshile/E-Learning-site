import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil placeat quisquam eos, inventore adipisci magni fugiat hic, veniam nemo officia ea repellendus eius unde, sed incidunt! Quo sunt suscipit excepturi.",
    icon: "ri-draft-line",
  },
  {
    title: "All Time Suppot",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil placeat quisquam eos, inventore adipisci magni fugiat hic, veniam nemo officia ea repellendus eius unde, sed incidunt! Quo sunt suscipit excepturi.",
    icon: "i-discuss-line",
  },
  {
    title: "Certification",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil placeat quisquam eos, inventore adipisci magni fugiat hic, veniam nemo officia ea repellendus eius unde, sed incidunt! Quo sunt suscipit excepturi.",
    icon: "i-contacts-book-line",
  },
];
const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>)
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
