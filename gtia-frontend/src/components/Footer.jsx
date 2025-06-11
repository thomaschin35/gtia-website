import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>GTIA</h5>
            <p>Georgia Tech International Ambassadors</p>
          </Col>
          <Col md={4}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/about" className="text-light">About</a></li>
              <li><a href="/events" className="text-light">Events</a></li>
              <li><a href="/guide" className="text-light">Guide</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Connect</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light"><i className="bi bi-discord"></i></a>
              <a href="#" className="text-light"><i className="bi bi-envelope"></i></a>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="text-center">
          <small>&copy; {new Date().getFullYear()} Georgia Tech International Ambassadors. All rights reserved.</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 