import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Header';
import Layout from '../components/Layout';

export const IndexPageTemplate = ({ title }) => {
  return (
    <Header brand={title} />
  );
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <IndexPageTemplate
        title={post.frontmatter.title}
      />
    </Layout>
  );
}

export default IndexPage;

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
  `
