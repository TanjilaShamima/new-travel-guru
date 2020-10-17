import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Image, Nav, Navbar } from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../../../Image/Logo.png';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let name;
    if(loggedInUser.email)  name = loggedInUser.name;
    return (
        <Container>
            <Navbar expand="lg">
                
                    <Navbar.Brand style={{width: '20%'}} as={Link} to={`/`}>
                        <img width="90%" src={logo} alt=""/></Navbar.Brand>
                    
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
                            {loggedInUser.email ? 
                            <Button  onClick={() => setLoggedInUser({})} variant="warning">Log Out</Button> : 
                            <Button as={Link} to={`/login`} variant="warning">Log In</Button>}
                        </Nav.Item>
                    </Navbar.Collapse>
            </Navbar>

</Container>
    );
};

export default Header;