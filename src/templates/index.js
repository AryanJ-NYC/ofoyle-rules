import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import CarouselComponent from '../components/Carousel/Carousel';
import OurProperties from '../components/OurProperties/OurProperties';

const IndexPage = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  const imageInfo = edges
    .map(edge => edge.node.frontmatter)
    .filter(frontmatter => Array.isArray(frontmatter.images) && frontmatter.images.length)
    .map(({ images, title }) => ({ imagePath: images[0].imagePath, title }));
  return (
    <Layout>
      <CarouselComponent images={imageInfo} />
      <OurProperties edges={edges} />
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
