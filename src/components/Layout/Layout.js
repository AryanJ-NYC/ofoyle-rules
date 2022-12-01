import React from 'react';
import Helmet from 'react-helmet';
import { Container } from 'react-bootstrap';
import { StaticQuery, graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import './layout.css';
import Footer from '../Footer';

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "index" } }) {
          frontmatter {
            title
            thankYouCopy
          }
        }
      }
    `}
    render={({
      markdownRemark: {
        frontmatter: { title, thankYouCopy },
      },
    }) => (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header title={title} />
        <Helmet>
          <title>Marco Island Properties | Foy Properties</title>
          <meta
            name="description"
            content="A listing of rental properties available in Marco Island, FL, USA"
          />
        </Helmet>
        <Container fluid style={{ display: 'flex', flexGrow: 1, padding: 0 }}>
          {children}
        </Container>
        <Footer thankYouCopy={thankYouCopy} />
      </div>
    )}
  ></StaticQuery>
);

export default TemplateWrapper;
