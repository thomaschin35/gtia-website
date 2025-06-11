import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <section className="hero-section py-5">
      <Container fluid className="position-relative">
        <div className="hero-quote-top">
          <h2 className="quote-text">"Bringing Georgia Tech to the world..."</h2>
        </div>
        
        <Row className="justify-content-center py-5">
          <Col md={8} lg={4}>
              <div className="d-flex justify-content-center">
                <Row className="justify-content-center g-4">
                  <Col xs={9}>
                    <Button variant="light" className="w-100 py-8 hero-button">
                      <span className="hero-button-letter">G</span>eorgia
                    </Button>
                  </Col>
                  <Col xs={9}>
                    <Button variant="light" className="w-100 py-8 hero-button">
                      <span className="hero-button-letter">T</span>ech
                    </Button>
                  </Col>
                  <Col xs={9}>
                    <Button variant="light" className="w-100 py-8 hero-button">
                      <span className="hero-button-letter">I</span>nternational
                    </Button>
                  </Col>
                  <Col xs={9}>
                    <Button variant="light" className="w-100 py-8 hero-button">
                      <span className="hero-button-letter">A</span>mbassadors
                    </Button>
                  </Col>
                </Row>
              </div>

              <div className="d-flex justify-content-center mt-4 gap-3">
                <Button variant="outline-dark" className="px-4 py-2">
                  <i className="bi bi-book me-2"></i> Guide
                </Button>
                <Button variant="outline-primary" className="px-4 py-2">
                  <i className="bi bi-discord me-2"></i> Discord
                </Button>
              </div>
          </Col>
        </Row>

        <div className="hero-quote-bottom text-end">
          <h2 className="quote-text">... and the world to Georgia Tech."</h2>
        </div>
        <div className="hero-buttons">
            asdfas
        </div>
        <div className="text-center mt-5">
          <a href="#upcoming-events" className="btn btn-link">
            Learn more <i className="bi bi-arrow-down"></i>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection; 