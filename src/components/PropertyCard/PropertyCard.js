import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './property-card.module.css';

const PropertyCard = ({ copy, imgPath, title }) => (
  <Card className={styles.card}>
    <Card.Img variant="top" src={imgPath} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{copy}</Card.Text>
    </Card.Body>
  </Card>
);

export default PropertyCard;
