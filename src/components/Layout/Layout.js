import React from 'react';
import Helmet from 'react-helmet';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import './layout.css';
import Footer from '../Footer';

const TemplateWrapper = ({ children }) => (
  <>
    <Header />
    <Helmet>
      <title>Marco Island Properties | Foy Properties</title>
      <meta name="description" content="A listing of rental properties available in Marco Island, FL, USA" />
    </Helmet>
    <Container fluid style={{ padding: 0 }}>
      <div>{children}</div>
    </Container>
    <Footer />
  </>
)

export default TemplateWrapper
