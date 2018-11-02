import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import OurProperties from '../components/OurProperties/OurProperties';

export const PropertyPageTemplate = ({ images, title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const imgItems = images.map(image => ({ original: image.imagePath, thumbnail: image.imagePath }));
  return (
    <>
      <ImageGallery items={imgItems} autoPlay={true} />
      <Container>

        <h1>{title}</h1>
        <PageContent content={content} />
      </Container>
    </>
  );
}

PropertyPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  title: PropTypes.string.isRequired,
}

const PropertyPage = ({ data, location }) => {
  const { allMarkdownRemark: { edges }, markdownRemark: property } = data;
  const otherProperties = edges.filter(edge => edge.node.fields.slug !== location.pathname);
  return (
    <Layout>
      <PropertyPageTemplate
        content={property.html}
        contentComponent={HTMLContent}
        images={property.frontmatter.images}
        title={property.frontmatter.title}
      />
      <OurProperties edges={otherProperties} title="Other Properties" />
    </Layout>
  );
}

export default PropertyPage;

export const propertyPageQuery = graphql`
  query PropertyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        images {
          imagePath
        }
      }
    },
    allMarkdownRemark(filter: {
      frontmatter: { templateKey: { eq: "property" }}
    }) {
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
