
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = ({ data }) => {
    const {id,name,image,description}=data
    return (
        <Col className='my-3'>

        <Card >
          <Card.Img  variant="top" src={image} />
          <Card.Body className='px-5 text-center'>
                    <Card.Title>{name}</Card.Title>
            <Card.Text >
              {description}
            </Card.Text>
            <NavLink to={`/service/${id}`}className='btn btn-primary px-5' variant="primary">Details</NavLink>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Service;