import React from 'react';
import { Link, graphql } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../components/Layout';
import PropertyCard from '../components/PropertyCard/PropertyCard';
import CarouselComponent from '../components/Carousel/Carousel';

const IndexPage = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  const imageInfo = edges
    .map(edge => edge.node.frontmatter)
    .filter(frontmatter => Array.isArray(frontmatter.images) && frontmatter.images.length)
    .map(({ images, title }) => ({ imagePath: images[0].imagePath, title }));
  return (
    <Layout>
      <CarouselComponent images={imageInfo} />
      <Container>
        <h1 style={{ fontSize: '3.5vmax', letterSpacing: '0.85rem', textAlign: 'center', textTransform: 'uppercase' }}>Our Properties</h1>
        <Row>
        {
          edges.map(({ node }) => (
            <Col sm={12} md={6} lg={4} key={node.id}>
              <Link to={node.fields.slug}>
                <PropertyCard
                  copy={node.excerpt}
                  imgPath={node.frontmatter.images[0].imagePath}
                  title={node.frontmatter.title}
                />
              </Link>
            </Col>
            )
          )
        }
        </Row>
      </Container>
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
            images {
              imagePath
            }
          }
        }
      }
    }
  }
  `
