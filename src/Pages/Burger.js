import React from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Burger1 from '../Images/burger1.jpg'
import Burger2 from '../Images/burger2.jpg'
import Burger3 from '../Images/burger3.jpg'
import Burger4 from '../Images/burger4.jpg'
import Burger5 from '../Images/burger5.jpg'
import Burger6 from '../Images/burger6.jpg'
import Burger7 from '../Images/burger7.jpg'
import Burger8 from '../Images/burger8.png'
import Burger9 from '../Images/burger9.jpg'

import  { useState } from 'react';
import Model1 from '../components/Model1';


 



const Burger = () => {

 const [isModalOpen, setIsModalOpen] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState('');

  const openModal = (url) => {
    setIsModalOpen(true);
    setWebsiteUrl(url);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setWebsiteUrl('');
  };

  return (
    

    <div className="container mt-50">
      <div>
      {isModalOpen && (
              <Model1 onClose={closeModal} url={websiteUrl} />
            )}
      </div>



      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
      <div className="row ">
        <h1> BURGER</h1>
      </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card mb-30">
             <Link className="card-img-tiles" to='https://www.toasttab.com/homekitchen/v3/add/9bdce791-b88f-4d48-b565-304002bb5464/291fb3eb-b58f-4f4c-9231-0b4206b91030' data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={Burger1} alt="Category" />
                </div>
                <div className="thumblist">
                  <img src={Burger2} alt="Category" />
                  <img src={Burger3} alt="Category" />
                </div>
              </div>
            </Link>
            <div className="card-body text-center">
              <h4 className="card-title">The All American</h4>
              <p className="text-muted">Starting from $12</p>
              <div className='addtocart-btn'>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => openModal('https://www.toasttab.com/homekitchen/v3/add/9bdce791-b88f-4d48-b565-304002bb5464/291fb3eb-b58f-4f4c-9231-0b4206b91030')}
                data-abc="true"
              >
                Add to Cart
              </button>
                <button
                  className="btn btn-outline-primary btn-sm"
                  to='https://www.toasttab.com/homekitchen/v3'
                  data-abc="true"
                >
                  Viwe Product
                </button>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card mb-30">
             <Link className="card-img-tiles" to='https://www.toasttab.com/homekitchen/v3/add/20492959-1af8-4eb3-8fae-cff543892a28/291fb3eb-b58f-4f4c-9231-0b4206b91030' data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={Burger4} alt="Category" />
                </div>
                <div className="thumblist">
                  <img src={Burger5} alt="Category" />
                  <img src={Burger6} alt="Category" />
                </div>
              </div>
            </Link>
            <div className="card-body text-center">
              <h4 className="card-title">The Ferrish Wheel</h4>
              <p className="text-muted">Starting from $13</p>
              <div className='addtocart-btn'>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => openModal('https://www.toasttab.com/homekitchen/v3/add/20492959-1af8-4eb3-8fae-cff543892a28/291fb3eb-b58f-4f4c-9231-0b4206b91030')}
                data-abc="true"
              >
                Add to Cart
              </button>
                <button
                  className="btn btn-outline-primary btn-sm"
                  to='https://www.toasttab.com/homekitchen/v3'
                  data-abc="true"
                >
                  Viwe Product
                </button>
              </div>
             
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card mb-30">
             <Link className="card-img-tiles" to='https://www.toasttab.com/homekitchen/v3/add/4f6b9379-d094-492c-aa80-5b0d5dedc8cd/291fb3eb-b58f-4f4c-9231-0b4206b91030' data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={Burger7} alt="Category" />
                </div>
                <div className="thumblist">
                  <img src={Burger8} alt="Category" />
                  <img src={Burger9} alt="Category" />
                </div>
              </div>
            </Link>
            <div className="card-body text-center">
              <h4 className="card-title">The Needham Melt</h4>
              <p className="text-muted">Starting from $14</p>
              <div className='addtocart-btn'>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => openModal('https://www.toasttab.com/homekitchen/v3/add/4f6b9379-d094-492c-aa80-5b0d5dedc8cd/291fb3eb-b58f-4f4c-9231-0b4206b91030')}
                data-abc="true"
              >
                Add to Cart
              </button>
                <button
                  className="btn btn-outline-primary btn-sm"
                  to='https://www.toasttab.com/homekitchen/v3'
                  data-abc="true"
                >
                  Viwe Product
                </button>
              </div>
          
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card mb-30">
             <Link className="card-img-tiles" to='https://www.toasttab.com/homekitchen/v3/add/c202a5ee-16e4-47c1-810a-58848853e97f/291fb3eb-b58f-4f4c-9231-0b4206b91030' data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={Burger5} alt="Category" />
                </div>
                <div className="thumblist">
                  <img src={Burger4} alt="Category" />
                  <img src={Burger6} alt="Category" />
                </div>
              </div>
            </Link>
            <div className="card-body text-center">
              <h4 className="card-title">The Fighter</h4>
              <p className="text-muted">Starting from $14</p>
              <div className='addtocart-btn'>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => openModal('https://www.toasttab.com/homekitchen/v3/add/c202a5ee-16e4-47c1-810a-58848853e97f/291fb3eb-b58f-4f4c-9231-0b4206b91030')}
                data-abc="true"
              >
                Add to Cart
              </button>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => openModal('https://www.toasttab.com/homekitchen/v3')}
                data-abc="true"
              >
                Add to Cart
              </button>
              

              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card mb-30">
             <Link className="card-img-tiles" to='https://www.toasttab.com/homekitchen/v3/add/7ac4e0a5-da6b-4e1e-89a4-e3d761917b77/291fb3eb-b58f-4f4c-9231-0b4206b91030' data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={Burger9} alt="Category" />
                </div>
                <div className="thumblist">
                  <img src={Burger8} alt="Category" />
                  <img src={Burger7} alt="Category" />
                </div>
              </div>
            </Link>
            <div className="card-body text-center">
              <h4 className="card-title">Turkey Burger</h4>
              <p className="text-muted">Starting from $14</p>
              <div className='addtocart-btn'>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => openModal('https://www.toasttab.com/homekitchen/v3/add/7ac4e0a5-da6b-4e1e-89a4-e3d761917b77/291fb3eb-b58f-4f4c-9231-0b4206b91030')}
                data-abc="true"
              >
                Add to Cart
              </button>
           
              <button
                className="btn btn-outline-primary btn-sm"
                href="#"
                data-abc="true"
              >
                Viwe Product
              </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card mb-30">
             <Link className="card-img-tiles" to='https://www.toasttab.com/homekitchen/v3/add/57613bdf-440e-4bc0-b9b7-71a241fb93c6/291fb3eb-b58f-4f4c-9231-0b4206b91030' data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={Burger3} alt="Category" />
                </div>
                <div className="thumblist">
                  <img src={Burger2} alt="Category" />
                  <img src={Burger1} alt="Category" />
                </div>
              </div>
            </Link>
            <div className="card-body text-center">
              <h4 className="card-title">Masala Weggie</h4>
              <p className="text-muted">Starting from $13</p>
              <div className='addtocart-btn'>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => openModal('https://www.toasttab.com/homekitchen/v3/add/57613bdf-440e-4bc0-b9b7-71a241fb93c6/291fb3eb-b58f-4f4c-9231-0b4206b91030')}
                data-abc="true"
              >
                Add to Cart
              </button>
                <button
                  className="btn btn-outline-primary btn-sm"
                  to='https://www.toasttab.com/homekitchen/v3'
                  data-abc="true"
                >
                  Viwe Product
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card mb-30">
             <Link className="card-img-tiles" to='https://www.toasttab.com/homekitchen/v3/add/73d69511-d920-42af-9615-b44b3673c3b2/291fb3eb-b58f-4f4c-9231-0b4206b91030' data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={Burger2} alt="Category" />
                </div>
                <div className="thumblist">
                  <img src={Burger1} alt="Category" />
                  <img src={Burger3} alt="Category" />
                </div>
              </div>
            </Link>
            <div className="card-body text-center">
              <h4 className="card-title">The Morning</h4>
              <p className="text-muted">Starting from $17</p>
              <div className='addtocart-btn'>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => openModal('https://www.toasttab.com/homekitchen/v3/add/73d69511-d920-42af-9615-b44b3673c3b2/291fb3eb-b58f-4f4c-9231-0b4206b91030')}
                data-abc="true"
              >
                Add to Cart
              </button>
                <button
                  className="btn btn-outline-primary btn-sm"
                  to='https://www.toasttab.com/homekitchen/v3'
                  data-abc="true"
                >
                  Viwe Product
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card mb-30">
             <Link className="card-img-tiles" to='https://www.toasttab.com/homekitchen/v3/add/c65c6cc9-1b50-4964-93f2-a53971a3d6e0/291fb3eb-b58f-4f4c-9231-0b4206b91030' data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={Burger6} alt="Category" />
                </div>
                <div className="thumblist">
                  <img src={Burger5} alt="Category" />
                  <img src={Burger4} alt="Category" />
                </div>
              </div>
            </Link>
            <div className="card-body text-center">
              <h4 className="card-title">Bourbon Steak Tip</h4>
              <p className="text-muted">Starting from $18</p>
              <div className='addtocart-btn'>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => openModal('https://www.toasttab.com/homekitchen/v3/add/c65c6cc9-1b50-4964-93f2-a53971a3d6e0/291fb3eb-b58f-4f4c-9231-0b4206b91030')}
                data-abc="true"
              >
                Add to Cart
              </button>
                <button
                  className="btn btn-outline-primary btn-sm"
                  to='https://www.toasttab.com/homekitchen/v3'
                  data-abc="true"
                >
                  Viwe Product
                </button>
              </div>
            </div>
          </div>
        </div>
        
      
      </div>
    </div>


  )
}

export default Burger