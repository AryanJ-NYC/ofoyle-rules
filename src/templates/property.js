import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';

export const PropertyPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (
    <Fragment>
      <h1>{title}</h1>
      <PageContent content={content} />
    </Fragment>
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
      }
    }
  }
  `