import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {

    const icon = { fontSize: '70px', color: 'green' };
    

    return (
        <div>
            <Container className='py-5 '>
                <div style={{ marginTop: '90px', padding: '70px', backgroundColor: '#a774e13d', borderRadius: '20px', }} className='text-center'>
                    <h2>Contact Us</h2>
                    <p>Egestas dolor erat vamus suscip ipsum estduin</p>
                </div>
            </Container>
            <Container>

                <Row Md={2} lg={3} Sm={1} className='text-center'>
                    <Col>
                        <div >
                            <div style={icon} ><i className="fas fa-map-marker-alt"></i></div>
                            <div><h5 className='p-5'>
                                Plot 38, Street 39, UpHill Town,
                                Newyork, USA</h5></div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <div style={icon}><i className="fas fa-phone-alt"></i></div>
                            <div><h5 className='p-5'>
                                +522 234 5678
                                0 (800) 126 58740
                            </h5></div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <div style={icon} ><i className="fas fa-comment-dots"></i></div>
                            <div><h5 className='p-5'>info@healthcare-agency.org
                                care@domain.com</h5></div>
                        </div>
                    </Col>

                </Row>

            </Container>

            <Container>
                <div className='text-center'>
                    <h2>Drop us a Message</h2>
                    <h5>Purus sapien consequat vitae sagittis facilisis</h5>
                </div>
            </Container>
            <Container className='text-center'>
                <div  style={{margin:'50px auto'}} className='mx-auto border d-flex'>
              
                   
                    <div className='mx-auto d-flex'>
                    <div >
                            <input className='mt-3' placeholder='Your Name' type="text" />  <br />
                            <p>write your name</p>

                            <input className='mt-3 ' placeholder='email' type="email" />  <br />
                            <p>write your email address</p>
                            <input className='mt-3' placeholder='Phone' type="phone" /> <br />
                            <p>your phone</p>
                        </div>
                        <div className='mx-3'>
                            <textarea name="message" id="" cols="30" rows="10"></textarea>
                            <p>your message</p>
                            
                        </div>
                      

                    </div>
                    
                
                    
                
                </div>
                <button className='btn btn-primary'>Submit</button>
            </Container>
        </div>
    );
};

export default Contact;