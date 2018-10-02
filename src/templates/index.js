import React from 'react';
import { Link, graphql } from 'gatsby';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import PropertyCard from '../components/PropertyCard/PropertyCard';

const IndexPage = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  return (
    <Layout>
      <Row>
      {
        edges.map(({ node }) => (
          <Col sm={12} md={6} lg={4} key={node.id}>
            <Link to={node.fields.slug}>
              <PropertyCard
                copy={node.excerpt}
                imgPath={node.frontmatter.images}
                title={node.frontmatter.title}
              />
            </Link>
          </Col>
          )
        )
      }
      </Row>
    </Layout>
  );
}

export default IndexPage;

export const indexPageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "property" }}}) {
      edges {
        node {
          id
          excerpt(pruneLength:160)
          fields {
            slug
          }
          frontmatter {
            title
            images
          }
        }
      }
    }
  }
  `
