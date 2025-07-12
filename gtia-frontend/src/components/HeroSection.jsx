import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section className="hero-section py-3 py-md-5">
      <Container fluid className="position-relative">
        <div className="hero-quote-container">
          <div className="hero-quote-top">
            <h2 className="quote-text quote-background-left">
              "Bringing <span className="quote-gold-letter">Georgia Tech</span> to the world..."
            </h2>
          </div>
        </div>

        <Row className="justify-content-center py-3 py-md-5">
          <Col xs={12} md={10} lg={8}>
            <div className="d-flex justify-content-center">
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
                    <span className="hero-button-letter">I</span>nternaional
                  </div>
                </Col>
                <Col xs={10} sm={9} md={8} className="d-flex justify-content-center">
                  <div className="w-100 hero-button">
                    <span className="hero-button-letter">A</span>mbassadors
                  </div>
                </Col>
              </Row>
            </div>

            <div className="d-flex justify-content-center mt-3 mt-md-4 gap-3 gap-md-5">
             <div className="d-flex align-items-center px-1">
                <img src="/assets/images/guide-icon.svg"></img>
                <a className="px-2">
                  Guide
                </a>
              </div>
              <div className="d-flex align-items-center px-1">
                <img src="/assets/images/discord-icon.svg"></img>
                <a className="px-2">
                  Discord
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <div className="hero-quote-bottom text-end">
          <h2 className="quote-text quote-background-right">
            ... and the <span className="quote-gold-letter">world</span> to Georgia Tech."
          </h2>
        </div>
        <div className="text-center mt-3 mt-md-5">
          <a href="#upcoming-events" className="btn btn-link learn-more-button"  >
            Learn more <img src="/assets/images/arrow-down.svg" alt="Arrow Down" style={{ height: "1.5em", verticalAlign: "middle" }} />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
