
import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Image, Nav, Navbar } from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../../../../Image/Logo.png';
import './HomeHeader.css';
import { UserContext } from '../../../../App';

const HomeHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let username;
    if(loggedInUser.email)  username = loggedInUser.name;
    return (
        <div className="home-header">
            <Container>
                <Navbar expand="lg">
                    
                        <Navbar.Brand style={{width: '15%'}} as={Link} to={`/`}>
                            <img width="100%" src={logo} alt=""/></Navbar.Brand>
                        
                        <Navbar.Toggle />
                        <Navbar.Collapse className="align-items-center" id="basic-navbar-nav">
                            <Nav.Item>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search Your Destination..." />                       
                                </Form>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/news">News</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <span style={{fontSize:'16px', fontWeight:'bold'}}>{username}</span>

                                {loggedInUser.email ? 
                              
                                <Button  onClick={() => setLoggedInUser({})} variant="warning">Log Out</Button> : 
                                <Button as={Link} to={`/login`} variant="warning">Log In</Button>}
                            </Nav.Item>
                        </Navbar.Collapse>
                    </Navbar>

             </Container>
        </div>
    );
};

export default HomeHeader;