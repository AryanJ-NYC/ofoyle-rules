import React from 'react';
import Helmet from 'react-helmet';
import { Container } from 'react-bootstrap';
import Header from './Header/Header';
import './layout.css';

const TemplateWrapper = ({ children }) => (
  <>
    <Header />
    <Helmet title="Marco Island Properties | Foy Properties" />
    <Container fluid>
      <div>{children}</div>
    </Container>
  </>
)

export default TemplateWrapper
