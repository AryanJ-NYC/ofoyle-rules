import React from 'react';
import Helmet from 'react-helmet';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import './layout.css';
import Footer from '../Footer';

const TemplateWrapper = ({ children }) => (
  <>
    <Header />
    <Helmet title="Marco Island Properties | Foy Properties" />
    <Container>
      <div>{children}</div>
    </Container>
    <Footer />
  </>
)

export default TemplateWrapper
