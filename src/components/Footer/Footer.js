import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import styles from './footer.module.css';

const Footer = () => (
  <footer>
    <Form name="contact" method="POST" netlify="true">
      <Container className={styles.form}>
        <h1 className={styles.header}>Contact Us</h1>
          <Form.Row>
            <Col sm={12} md={6}>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="first-name"/>
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="last-name" />
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group controlId="emailAddress">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name="email-address" />
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" name="telephone-number" />
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group controlId="Inquiry">
                <Form.Label>Inquiry</Form.Label>
                <Form.Control as="textarea" rows="5" name="inquiry"/>
              </Form.Group>
            </Col>
          </Form.Row>
          <div className={styles.buttonContainer}>
            <Button type="submit" variant="primary">Submit</Button>
          </div>
      </Container>
    </Form>
  </footer>
);

export default Footer;
