import React from 'react'
import { Carousel, Image } from 'react-bootstrap';
import styles from './carousel.module.css';

const CarouselComponent = ({ images }) => {
  console.log({images});
  const carouselItems = images.map(({ imagePath, title }) => (
    <Carousel.Item>
      <Image
        src={imagePath}
        style={{ width: '100vmax', maxHeight: '80vmin' }}
      />
      <Carousel.Caption>
        <h3>{title}</h3>
      </Carousel.Caption>
    </Carousel.Item>
  ));
  return (
    <Carousel className={styles.carousel}>
      {carouselItems}
    </Carousel>
  );
}

export default CarouselComponent
