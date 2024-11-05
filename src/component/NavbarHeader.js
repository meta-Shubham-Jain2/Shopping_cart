import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavbarHeader = () => {
  // let username = sessionStorage.getItem('username');
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        {sessionStorage.getItem('username') !== null ? (<Navbar.Text className='navigationlink'>
            <Link to= "/login">logout</Link>
          </Navbar.Text> ):(<Navbar.Text className='navigationlink'>
            <Link to= "/register">Register</Link>
          </Navbar.Text>)}
        
          {/* <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text> */}
          <Navbar.Text>
            <Link to= "/cart">  Cart</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarHeader
