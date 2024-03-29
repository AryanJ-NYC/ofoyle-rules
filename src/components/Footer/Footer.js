import React, { Component } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import styles from './footer.module.css';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Footer extends Component {
  state = {
    isSubmitted: false,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { isSubmitted, ...formValues } = this.state;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...formValues
      })
    })
    .then(() => this.setState({ isSubmitted: true }))
    .catch(error => console.error(error));
  }

  renderForm = () => (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={this.handleSubmit}
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div hidden><input name="bot-field" onChange={this.handleChange} /></div>
      <Form.Row>
        <Col sm={12} md={6}>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="first-name" onChange={this.handleChange} />
          </Form.Group>
        </Col>
        <Col sm={12} md={6}>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="last-name" onChange={this.handleChange} />
          </Form.Group>
        </Col>
        <Col sm={12} md={6}>
          <Form.Group controlId="emailAddress">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" name="email-address" onChange={this.handleChange} />
          </Form.Group>
        </Col>
        <Col sm={12} md={6}>
          <Form.Group controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" name="telephone-number" onChange={this.handleChange} />
          </Form.Group>
        </Col>
        <Col sm={12} md={6}>
          <Form.Group controlId="Inquiry">
            <Form.Label>Inquiry</Form.Label>
            <Form.Control as="textarea" rows="5" name="inquiry" onChange={this.handleChange} />
          </Form.Group>
        </Col>
      </Form.Row>
      <div className={styles.buttonContainer}>
        <Button type="submit" variant="primary">Submit</Button>
      </div>
    </form>
  );

  renderThankYou = (copy) => (
    <p>{copy}</p>
  );

  render() {
    return (
      <footer className={styles.footerContainer}>
        <Container className={styles.form}>
          <h1 className={styles.header}>Contact Us</h1>
          { this.state.isSubmitted ? this.renderThankYou(this.props.thankYouCopy) : this.renderForm() }
        </Container>
      </footer>
    );
  }
}
