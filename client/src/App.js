
import './App.css';

import PhoneSignin from './Components/PhoneSignin';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { MdOutlineSystemSecurityUpdate } from "react-icons/md";
import  "./App.css"
function App() {
  return (
    <> 
      
      <Navbar expand='md' bg="success" data-bs-theme="dark" >
      
      
      
        <Container >
          <Navbar.Brand className='h3' href="/">OTP Verifier</Navbar.Brand>
          <MdOutlineSystemSecurityUpdate size={31} color="white"  />
          <Nav className="ms-auto ">
            <Nav.Link className='mx-4' href="/">Home</Nav.Link>
            <Nav.Link className='mx-4' href="features">Features</Nav.Link>
            <Nav.Link className='mx-4' href="blog">Blog</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <PhoneSignin/>
    
    </>
  );
}

export default App;
