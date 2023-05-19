import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/HFLOGO.png'
import {FaUserCircle} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'

function NavBar() {
  return (
    <Navbar className=' border border-bottum navbar ' style={{ height: '80px', backgroundColor: '#ffffff' }} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={'/'} >
          <div className='logo'>
            <img src={logo}>
            </img>
          </div>
        </Navbar.Brand>
        

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'end' }}>
          <Nav className="items" style={{ display: 'contents' }}>
            <Nav.Link as={Link} to={'/'} className='item' style={{ color: 'black' }}>HOME</Nav.Link>
            <Nav.Link as={Link} to={'Contact'} className='item'>CATERING ORDER</Nav.Link>
            <Nav.Link as={Link} to={'About'} className='item'>ORDER ONLINE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav" >
          
        </Navbar.Collapse>
       </Container>
        <div className='items2'>
            <Nav.Link as={Link} to={'/'} className='item1'><FaUserCircle /></Nav.Link>
            <Nav.Link as={Link} to={'/'} className='item1'><AiOutlineShoppingCart />
            </Nav.Link>
        </div>
    </Navbar>



      


  );
}

export default NavBar;




































































// import React from 'react'
// import{BrowserRouter, Link, Route} from 'react-router-dom'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


// const NavBar = () => {
//   return (
//     <>
        
//     <Navbar className='fixed-top' bg="dark" >

//         <Container>
//           <Navbar.Brand as={Link} to={'/'}>Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
//             <Nav.Link as={Link} to={"Contact"}>Contact</Nav.Link>
//             <Nav.Link as={Link} to={"About"}>About</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//     </>
//   )
// }

// export default NavBar