import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <div style={{ alignItems: 'center', display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
        404 not found
      </div>
    </Layout>
  );
};

export default IndexPage;

export const indexPageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "property" } } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
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
`;
