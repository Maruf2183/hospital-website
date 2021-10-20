import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const About = () => {
    return (
        <div>
             <Container className='my-5 d-flex'>


<div className="image-div">
    <img src="https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg" alt="" />
</div>


<div className="text-div">
    <h2>We Offer</h2>
    <h1>Fast And Reliable</h1>
    <h4>Medical And HealthCare Solutions to Our Patients</h4>
    <p>Pellentesque vitae ultrice posuere. Praesent justo laoret dignis ectus etiam ipsum habitant tristique nam est. Donec venentse euvarius cursus massa metus adipisc ing ante. Nulla aculis lorem metus.</p>
    <div>
        <div className="icon-div"><span>hi</span></div>
        <div className="text-div">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptates!</p>
        </div>
    </div>
    <div>
        <div className="icon-div">hi</div>
        <div className="text-div">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, minus!</p>
        </div>
    </div>
</div>



</Container>

<Container className='apoinment'>
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
       </div>

    )
};

export default About;