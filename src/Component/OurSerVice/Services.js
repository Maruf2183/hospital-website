import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div className='service-container'>
            <Container className='text-center my-5 py-5 text-primary'  >
                <h1 >This is our Service please cheek this out for your need</h1>
            </Container>
            <Container>
                <Row Md={2} lg={3} Sm={1}>
                    {services.map(service => <Service
                        key={service.id}
                        data={service} > </Service>)}
                </Row>
            </Container>
        </div>
    );
};

export default Services;