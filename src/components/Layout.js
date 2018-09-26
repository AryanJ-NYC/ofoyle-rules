import React from 'react';
import Helmet from 'react-helmet';
import { Container } from 'react-bootstrap';
import Header from './Header/Header';

const TemplateWrapper = ({ children }) => (
  <Container fluid>
    <Helmet title="Marco Island Properties | Foy Properties" />
    <Header />
    <div>{children}</div>
  </Container>
)

export default TemplateWrapper
