import React from 'react';
import { Navbar } from 'react-bootstrap';
import styles from './header.module.css';

const Header = ({ brand }) => (
  <Navbar bg="dark" variant="dark" className={styles.header}>
    <Navbar.Brand className={styles.brandtext}>{brand}</Navbar.Brand>
  </Navbar>
);

export default Header;
