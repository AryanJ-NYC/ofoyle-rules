import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'gatsby';
import PropertyCard from '../PropertyCard/PropertyCard';

const OurProperties = ({ edges, title = "Our Properties" }) => (
  <Container>
    <h1 style={{ fontSize: '3.5vmax', letterSpacing: '0.85rem', textAlign: 'center', textTransform: 'uppercase' }}>
      {title}
    </h1>
    <Row>
    {
      edges.map(({ node }) => (
        <Col sm={12} md={6} lg={4} key={node.id}>
          <Link to={node.fields.slug}>
            <PropertyCard
              copy={node.excerpt}
              imgPath={node.frontmatter.images[0].imagePath}
              title={node.frontmatter.title}
            />
          </Link>
        </Col>
        )
      )
    }
    </Row>
  </Container>
);

export default OurProperties;
