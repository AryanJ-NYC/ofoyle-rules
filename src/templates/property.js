import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';

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

const PropertyPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <PropertyPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        images={post.frontmatter.images}
        title={post.frontmatter.title}
      />
    </Layout>
  );
}

export default PropertyPage;

export const indexPageQuery = graphql`
  query PropertyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        images {
          imagePath
        }
      }
    }
  }
  `
