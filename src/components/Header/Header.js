import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'gatsby';
import styles from './header.module.css';

const Header = ({ title }) => (
  <Navbar variant="dark" className={styles.header}>
    <Navbar.Brand className={styles.brandtext}>
      <Link to="/" className={styles.link}>{title}</Link>
    </Navbar.Brand>
  </Navbar>
);

export default Header;
