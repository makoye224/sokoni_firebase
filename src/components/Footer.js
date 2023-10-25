import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="bg-light py-4 mt-4">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <h6>About Us</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus ultricies semper velit non vulputate.
            </p>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <h6>Contact Us</h6>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </Col>
          <Col xs={12} md={4}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
