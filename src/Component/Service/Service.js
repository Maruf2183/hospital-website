
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = ({ data }) => {
  const { id, name, image, description } = data;
  const shotdescription = description.slice(0,157);
    return (
        <Col className='my-3'>

        <Card >
          <Card.Img style={{width:'100%',height:'380px',margin:'0px auto'}}  variant="top" src={image} />
          <Card.Body className='px-4 text-center'>
                    <Card.Title style={{color:'blue'}} >{name}</Card.Title>
            <Card.Text style={{textAlign:'center',textTransform:'capitalize'}} >
              {shotdescription}
            </Card.Text>
            <NavLink to={`/service/${id}`}className='btn btn-primary px-5' variant="primary">Details</NavLink>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Service;