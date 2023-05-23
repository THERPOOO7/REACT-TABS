import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/HFLOGO.png'
import {FaUserCircle} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Model1 from './Model1';
import abc from '../'

const NavBar = () => 

{
const [isModalOpen, setIsModalOpen] = useState(false);
const [websiteUrl, setWebsiteUrl] = useState('');

const openModal = (url) => {
  console.log('clicked')
  setIsModalOpen(true);
  setWebsiteUrl(url);
};

const closeModal = () => {
  setIsModalOpen(false);
  setWebsiteUrl('');
};


  return (
    <>
      <Navbar className=' border border-bottum navbar ' style={{ height: '80px', backgroundColor: '#ffffff' }} expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={'/'} >
            <div className='logo'>
              <img src={logo} alt='logo'>
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
          <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:'end'}} >
            <div className='items2'>
              <Nav.Link as={Link} to={'ProfileP'} className='item1'><FaUserCircle /></Nav.Link>
              <button onClick={() => openModal('https://www.toasttab.com/homekitchen/v3')} className='item1'><AiOutlineShoppingCart />
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
      <div className="col-lg-12">
        <div className='' style={{ width: '80%', margin: 'auto' }}>
          <a className='' onClick={() => openModal('https://www.toasttab.com/homekitchen/v3')}> </a>
          {isModalOpen && (
            <Model1 onClose={closeModal} url={websiteUrl} />
          )}
        </div>
      </div>
    </>
  );
}

export default NavBar;



        
          

      






































































// import React from 'react'
// import{BrowserRouter, Link, Route} from 'react-router-dom'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Button } from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap/Button';


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