import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { footerConfig } from "../config/emperor";
const Footer = () => {
  return (
    <footer style={{ backgroundImage: `url(${footerConfig.footerBgImage})` }}>
      <Container>
        <Row className="text-center text-md-start py-4">
          {footerConfig.columns.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
              {item.title}
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
