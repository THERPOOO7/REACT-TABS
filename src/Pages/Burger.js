import React from 'react'
import {Link} from 'react-router-dom'
import data from '../../src/data.json'
import  { useState, useEffect } from 'react';
import Model1 from '../components/Model1';

const Burger = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state


  const openModal = (url) => {
    setIsModalOpen(true);
    setWebsiteUrl(url);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setWebsiteUrl('');
  };

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the delay (e.g., when the data is loaded)
    }, 1000); // Change the delay time as needed
  }, []);

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

      {data.burger.map((item, index) => (
          <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
            <div className="card mb-30">
              <Link className="card-img-tiles" to={item.link} data-abc="true">
                <div className="inner">
                  <div className="main-img">
                    <img src={item.mainImage} alt="Category" />
                  </div>
                  <div className="thumblist">
                    {item.thumbImages.map((thumbImage, thumbIndex) => (
                      <img key={thumbIndex} src={thumbImage} alt="Category" />
                    ))}

                  </div>
                </div>
              </Link>
              <div className="card-body text-center">
                <h4 className="card-title">{item.title}</h4>
                <p className="text-muted">Starting from {item.price}</p>
                <div className='addtocart-btn'>
                  <Link
                    className="btn btn-outline-primary btn-sm"
                    to={item.addToCartLink}
                    data-abc="true"
                  >
                    Add to Cart
                  </Link>
                  <Link
                    className="btn btn-outline-primary btn-sm"
                    to={item.viewProductLink}
                    data-abc="true"
                  >
                    Viwe Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Burger
        
      




