import React from 'react';
import {Container, Navbar} from 'react-bootstrap';
import tha from './tha.jpg'
function Navbarr() {
  return (
    <Navbar style={{backgroundColor: "#79d9d1"}}>
      
      <Container>
      <Navbar.Brand href="#tha"><img src={tha}  alt='tha' height={40} width={100} style={{borderRadius:'50%'}}/></Navbar.Brand>
        {/* <Navbar.Brand href="#logo">Tp Bazar</Navbar.Brand> */}
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-black'>
          Admin Dashboard
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navbarr;