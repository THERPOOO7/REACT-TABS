import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// import sandwich1 from '../Images/sandwich1.png'
// import sandwich2 from '../Images/sandwich2.jpg'
// import sandwich3 from '../Images/sandwich3.jpg'
// import sandwich4 from '../Images/sandwich4.jpg'
// import sandwich5 from '../Images/sandwich5.png'
// import sandwich6 from '../Images/sandwich6.png'
// import sandwich7 from '../Images/sandwich7.jpg'
// import sandwich8 from '../Images/sandwich8.jpg'
// import sandwich9 from '../Images/sandwich9.jpg'

import sw1 from '../Images/sw1.jpg'
import sw2 from '../Images/sw2.jpg'
import sw3 from '../Images/sw3.jpg'
import sw4 from '../Images/sw4.jpg'
import sw5 from '../Images/sw5.jpg'
import sw6 from '../Images/sw6.jpg'
import sw7 from '../Images/sw7.jpg'
import sw8 from '../Images/sw8.jpg'
import sw9 from '../Images/sw9.jpg'
import sw11 from '../Images/sw11.jpg'

import  { useState } from 'react';
import Model1 from '../components/Model1';

const Sandwich = () => {
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
      <div className='row'>
        <div className='col-12'> 

          <div>
            <a className='btn btn-primary' onClick={() => openModal('https://www.toasttab.com/homekitchen/v3')}>Open Website</a>
            {isModalOpen && (
              <Model1 onClose={closeModal} url={websiteUrl} />
            )}
          </div>
          
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <div className="row ">
            <h1> SANDWICH</h1>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card mb-30">
            <Link className="card-img-tiles" to='https://www.toasttab.com/homekitchen/v3/add/a8ac1173-1ebc-4088-a627-6cb5141f2e7b/bd32b5a5-9723-49aa-bd03-3ef3ff4bde60' data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={sw1} alt="Category" />
                </div>
                <div className="thumblist">
                  <img src={sw6} alt="Category" />
                  <img src={sw3} alt="Category" />
                </div>
              </div>
            </Link>
            <div className="card-body text-center">
              <h4 className="card-title">Southern Damsel</h4>
              <p className="text-muted">Starting from $14</p>
              <div className='addtocart-btn'>
                <button
                  className="btn btn-outline-warning btn-sm"
                  onClick={() => openModal('https://www.toasttab.com/homekitchen/v3')}
                  data-abc="true"
                >
                  Add to Cart
                </button>
                <Link
                  className="btn btn-outline-primary btn-sm"
                  to='https://www.toasttab.com/homekitchen/v3/add/a8ac1173-1ebc-4088-a627-6cb5141f2e7b/bd32b5a5-9723-49aa-bd03-3ef3ff4bde60'
                  data-abc="true"
                >
                  Viwe Product
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card mb-30">
            <div className='addtocart-btn'>
              <Link className="card-img-tiles" to='https://www.toasttab.com/homekitchen/v3/add/8738621f-e97d-4db9-8a11-72b5a7991fc5/bd32b5a5-9723-49aa-bd03-3ef3ff4bde60' data-abc="true">
                <div className="inner">
                  <div className="main-img">
                    <img src={sw4} alt="Category" />
                  </div>
                  <div className="thumblist">
                    <img src={sw5} alt="Category" />
                    <img src={sw2} alt="Category" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="card-body text-center">
              <h4 className="card-title">Buffalo Grill Cheese</h4>
              <p className="text-muted">Starting from $14</p>
              <div className='addtocart-btn'>
                <Link
                  className="btn btn-outline-primary btn-sm"
                  to='https://www.toasttab.com/homekitchen/v3/add/8738621f-e97d-4db9-8a11-72b5a7991fc5/bd32b5a5-9723-49aa-bd03-3ef3ff4bde60'
                  data-abc="true"
                >
                  Add to Cart
                </Link>
                <Link
                  className="btn btn-outline-primary btn-sm"
                  to='https://www.toasttab.com/homekitchen/v3/add/8738621f-e97d-4db9-8a11-72b5a7991fc5/bd32b5a5-9723-49aa-bd03-3ef3ff4bde60'
                  data-abc="true"
                >
                  Viwe Product
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card mb-30">
            <div className='addtocart-btn'>
              <Link className="card-img-tiles" to='https://www.toasttab.com/homekitchen/v3/add/eb8dd1d7-9f14-44b3-a7a5-c3e394fa6433/bd32b5a5-9723-49aa-bd03-3ef3ff4bde60' data-abc="true">
                <div className="inner">
                  <div className="main-img">
                    <img src={sw7} alt="Category" />
                  </div>
                  <div className="thumblist">
                    <img src={sw8} alt="Category" />
                    <img src={sw9} alt="Category" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="card-body text-center">
              <h4 className="card-title">Eastern shore</h4>
              <p className="text-muted">Starting from $15</p>
              <div className='addtocart-btn'>
                <Link
                  className="btn btn-outline-primary btn-sm"
                  to='https://www.toasttab.com/homekitchen/v3/add/eb8dd1d7-9f14-44b3-a7a5-c3e394fa6433/bd32b5a5-9723-49aa-bd03-3ef3ff4bde60'
                  data-abc="true"
                >
                  Add to Cart
                </Link>
                <Link
                  className="btn btn-outline-primary btn-sm"
                  to='https://www.toasttab.com/homekitchen/v3/add/eb8dd1d7-9f14-44b3-a7a5-c3e394fa6433/bd32b5a5-9723-49aa-bd03-3ef3ff4bde60'
                  data-abc="true"
                >
                  Viwe Product
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card mb-30">
            <Link className="card-img-tiles" to='https://www.toasttab.com/homekitchen/v3/add/eb8dd1d7-9f14-44b3-a7a5-c3e394fa6433/bd32b5a5-9723-49aa-bd03-3ef3ff4bde60' data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={sw7} alt="Category" />
                </div>
                <div className="thumblist">
                  <img src={sw8} alt="Category" />
                  <img src={sw9} alt="Category" />
                </div>
              </div>
            </Link>
            <div className="card-body text-center">
              <h4 className="card-title">Estern Shore</h4>
              <p className="text-muted">Starting from $15</p>
              <div className='addtocart-btn'>
                <Link
                  className="btn btn-outline-primary btn-sm"
                  to='https://www.toasttab.com/homekitchen/v3/add/eb8dd1d7-9f14-44b3-a7a5-c3e394fa6433/bd32b5a5-9723-49aa-bd03-3ef3ff4bde60'
                  data-abc="true"
                >
                  Add to Cart

                </Link>
                <Link
                  className="btn btn-outline-primary btn-sm"
                  to='https://www.toasttab.com/homekitchen/v3/add/eb8dd1d7-9f14-44b3-a7a5-c3e394fa6433/bd32b5a5-9723-49aa-bd03-3ef3ff4bde60'
                  data-abc="true"
                >
                  Viwe product

                </Link>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card mb-30">
            <Link className="card-img-tiles" to='https://www.toasttab.com/homekitchen/v3/add/794add2d-41e3-403b-8bc5-5aa959f278cc/bd32b5a5-9723-49aa-bd03-3ef3ff4bde60' data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={sw3} alt="Category" />
                </div>
                <div className="thumblist">
                  <img src={sw4} alt="Category" />
                  <img src={sw6} alt="Category" />
                </div>
              </div>
            </Link>
            <div className="card-body text-center">
              <h4 className="card-title">Cowboy Brisket</h4>
              <p className="text-muted">Starting from $15</p>
              <div className='addtocart-btn'>
                <Link
                  className="btn btn-outline-primary btn-sm"
                  to='https://www.toasttab.com/homekitchen/v3/add/794add2d-41e3-403b-8bc5-5aa959f278cc/bd32b5a5-9723-49aa-bd03-3ef3ff4bde60'
                  data-abc="true"
                >
                  Add to Cart
                </Link>
                <Link
                  className="btn btn-outline-primary btn-sm"
                  to='https://www.toasttab.com/homekitchen/v3/add/794add2d-41e3-403b-8bc5-5aa959f278cc/bd32b5a5-9723-49aa-bd03-3ef3ff4bde60'
                  data-abc="true"
                >
                  Viwe Product
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card mb-30">
            <a className="card-img-tiles" to='https://www.toasttab.com/homekitchen/v3/add/7bab4a44-ee8b-4400-9342-39ee6754f75f/bd32b5a5-9723-49aa-bd03-3ef3ff4bde60' data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={sw5} alt="Category" />
                </div>
                <div className="thumblist">
                  <img src={sw7} alt="Category" />
                  <img src={sw8} alt="Category" />
                </div>
              </div>
            </a>
            <div className="card-body text-center">
              <h4 className="card-title">The Tandoori</h4>
              <p className="text-muted">Starting from $14</p>
              <div className='addtocart-btn'>
                <Link
                  className="btn btn-outline-primary btn-sm"
                  to='https://www.toasttab.com/homekitchen/v3/add/7bab4a44-ee8b-4400-9342-39ee6754f75f/bd32b5a5-9723-49aa-bd03-3ef3ff4bde60'
                  data-abc="true"
                >
                  Add to Cart
                </Link>
                <Link
                  className="btn btn-outline-primary btn-sm"
                  to='https://www.toasttab.com/homekitchen/v3'
                  data-abc="true"
                >
                  Viwe Product
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
</div>
  )
}

export default Sandwich