import React, { useEffect, useState } from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router';


const Details = () => {



    const [services, setServices] = useState([]);
    
    
    
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])



    const { id } = useParams();
   

    const servicem = services.find(servicex => servicex.id.includes(id));
    console.log(servicem);
 


    


    
    

    


    return (
        <Container>

            <h3 className='text-center' style={{ marginTop: '300px' }}>Here you can know better</h3>




            <Col className='my-3'>

                <Card>
                    <Card.Img variant="top" src={servicem?.image} />
                    <Card.Body className='px-5 text-center'>
                        <Card.Title>{servicem?.name}</Card.Title>
                        <Card.Text >
                            {servicem?.description}
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </Col>


        </Container>
    );
};

export default Details;











