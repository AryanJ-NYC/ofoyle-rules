import React from 'react';
import Helmet from 'react-helmet';
import { Container } from 'react-bootstrap';

const TemplateWrapper = ({ children }) => (
  <Container fluid>
    <Helmet title="Marco Island Properties | Foy Properties" />
    <div>{children}</div>
  </Container>
)

export default TemplateWrapper
