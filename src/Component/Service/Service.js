import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = ({ data }) => {
    const {name,image,description}=data
    return (
        <Col className='my-3'>

        <Card >
          <Card.Img  variant="top" src={image} />
          <Card.Body className='px-5 text-center'>
                    <Card.Title>{name}</Card.Title>
            <Card.Text >
              {description}
            </Card.Text>
            <Button className='btn btn-primary px-5' variant="primary">Details</Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Service;