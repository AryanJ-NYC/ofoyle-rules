import React from 'react';
import { Link, graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';

export const IndexPageTemplate = () => {
  return (
    <div></div>
  );
}

const IndexPage = ({ data }) => {
  const { allMarkdownRemark, markdownRemark: post } = data;
  const { edges } = allMarkdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        title={post.frontmatter.title}
      />
      {
        edges.map(({ node }) => <Link key={node.id} to={node.fields.slug}>{node.frontmatter.title}</Link>)
      }
    </Layout>
  );
}

export default IndexPage;

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "property" }}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
  `
