import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Home.css'




const Home = () => {
  const [services, setServices] = useState([]);
  const [srtservice, setSrtservice] = useState([]);

  useEffect(() => {
    fetch('/fakeData.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);

  
  useEffect(() => {
    const shortservicex = services.slice(1, 4)
    setSrtservice(shortservicex)
  }, [services])
  


  return (

    <div>
      <div className='home-container'>
        <Container>
          <div className='home'>
            <Row>
              <div style={{ marginTop: '300px' }}>
                <div className='text-primary'><h1>WirusHub</h1><p>make your life simple</p></div>
                <h2 className=' banner-text p-4'>A Team of medical Professional</h2><br />
                <h2 className='banner-text p-4 '>To Take Care of Your Health</h2>
              </div>
            </Row>
          </div>
        </Container>

      </div>


      <Container style={{marginTop:'-50px'}} className='apoinment'>
        <Row className='p-5'>
          <Col >
            <div>
              <div>
                <i className="fas fa-edit"></i>
                <h4 style={{ display: 'inline-block' }} className='px-3'>Need A Doctor For Cheek-Up?</h4>
              </div>

              <h1 className='text-bold'>just make an appoinment</h1>
              <button className='apoinment-button'>GET AN APOINMENT</button>
            </div>
          </Col>
          <Col >
            <div>
              <div>
                <i className="far fa-clock"></i>
                <h5 style={{ display: 'inline-block' }} className='px-3'>Opening Hours</h5>
              </div>

              <table className='my-5'>
                <tr>
                  <td>Monday-friday</td>
                  <td><hr /></td>
                  <td>08:00am - 10:00pm</td>
                </tr>

                <tr>
                  <td>Saterday-Sunday</td>
                  <td>---------------</td>
                  <td>09:00am - 06:00pm</td>
                </tr>

                <tr>
                  <td>Energency Service</td>
                  <td><hr /></td>
                  <td>24 hours Open</td>
                </tr>


              </table>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='p-5 text-center'>

        <h1>Welcome to HEALTHCAREAGENCY</h1>
        <h5>`Our medical specialists care about you and your family’s health`</h5>
      </Container>


      <Container className='text-center'>
        <Row>
          <Col>
            <div className='big-icon text-primary' ><i className="fas fa-user-md"></i></div>
            <h1 className='my-4'>HealthCare Professionals</h1>

            <p>Sed posuere nunc libero pellentesque vitae ultrices posuere. Praesent justo aoreet dignissim lectus etiam ipsum habitant tristique</p>
          </Col>
          <Col>
            <div className='big-icon text-primary'><i className="fas fa-briefcase-medical"></i></div>
            <h1 className='my-4'>Medical Excellence</h1>
            <p>Sed posuere nunc libero pellentesque vitae ultrices posuere. Praesent justo aoreet dignissim lectus etiam ipsum habitant tristique</p>
          </Col>
          <Col>
            <div className='big-icon text-primary'><i className="fas fa-satellite"></i></div>
            <h1 className='my-4'>Latest Technologies</h1>
            <p>Sed posuere nunc libero pellentesque vitae ultrices posuere. Praesent justo aoreet dignissim lectus etiam ipsum habitant tristique</p>
          </Col>

        </Row>
      </Container>
      <Container className='text-center my-5'>
        <h2>Featured Clinical Services For Patients</h2>
        <h5>Our medical specialists care about you and your family’s health</h5>
      </Container>



      <Container>
        <Row>
          {srtservice.map(service => <Service
            key={service.id}
            data={service} > </Service>)}
        </Row>
      </Container>



</div>

  );
};

export default Home;
