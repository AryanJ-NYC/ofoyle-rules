import React from 'react';
import { Navbar } from 'react-bootstrap';
import styles from './header.module.css';
import { Link, StaticQuery, graphql } from 'gatsby';

const Header = () => (
  <StaticQuery
    query={graphql`
    query HeaderQuery {
      markdownRemark(frontmatter:{ templateKey:{ eq:"index" }}) {
        frontmatter {
          title
        }
      }
    }
    `}
    render={({ markdownRemark: { frontmatter: { title } } }) => (
      <Navbar bg="gold" variant="dark" className={styles.header}>
        <Navbar.Brand className={styles.brandtext}>
          <Link to="/" className={styles.link}>{title}</Link>
        </Navbar.Brand>
      </Navbar>
    )}
  />
);

export default Header;
