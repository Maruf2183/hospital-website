import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar  collapseOnSelect fixed='top' expand='sm' bg='primary' variant='dark'> 
                <Container>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav >
                        <NavLink className='text-white mx-3'  to='/home' activeStyle={{
                                fontWeight: "bold",
                                
                            }}>Home</NavLink>

                            <NavLink className='text-white mx-3' to='/about' activeStyle={{
                                fontWeight: "bold",
                                
                            }} >About Us</NavLink>

                            <NavLink className='text-white mx-3' to='/service' activeStyle={{
                                fontWeight: "bold",
                                
                            }} >Our Service</NavLink>

                            <NavLink className='text-white mx-3' to='/contact' activeStyle={{
                                fontWeight: "bold",
                                
                            }} >Contact</NavLink> 
                            <NavLink className='text-white mx-3' to='/login' activeStyle={{
                                fontWeight: "bold",
                                
                            }} >Log In</NavLink> 
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'>

                    </Navbar.Toggle>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;


/* */