import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section className="hero-section py-3 py-md-5">
      <Container fluid className="position-relative">
        <Row className="justify-content-center py-3 py-md-5">
          <Col xs={12} md={10} lg={8}>
            <div className="d-flex justify-content-center position-relative">
              <Row className="justify-content-center g-2 g-md-3">
                <Col xs={10} sm={9} md={8} className="d-flex justify-content-center">
                  <div className="w-100 hero-button">
                      <span className="hero-button-letter">G</span>eorgia
                  </div>
                </Col>
                <Col xs={10} sm={9} md={8} className="d-flex justify-content-center">
                  <div className="w-100 hero-button">
                    <span className="hero-button-letter">T</span>ech
                  </div>
                </Col>
                <Col xs={10} sm={9} md={8} className="d-flex justify-content-center">
                  <div className="w-100 hero-button">
                    <span className="hero-button-letter">I</span>nternational
                  </div>
                </Col>
                <Col xs={10} sm={9} md={8} className="d-flex justify-content-center">
                  <div className="w-100 hero-button">
                    <span className="hero-button-letter">A</span>mbassadors
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
