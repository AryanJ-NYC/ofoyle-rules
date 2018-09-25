import React from 'react';
import Helmet from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const TemplateWrapper = ({ children }) => (
  <Container>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <div>{children}</div>
  </Container>
)

export default TemplateWrapper
