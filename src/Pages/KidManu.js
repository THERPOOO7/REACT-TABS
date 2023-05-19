import React from 'react'
import { Link } from 'react-router-dom'
import bslider1 from '../Images/bslider1.jpg'
import bslider2 from '../Images/bslider2..jpg'
import bslider3 from '../Images/bslider3.jpg'

import cslider1 from '../Images/cslider1.jpg'
import cslider2 from '../Images/cslider2.jpg'
import cslider3 from '../Images/cslider3.jpg'

const KidManu = () => {
  return (
    <div>

      <div className="container mt-50">
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className="row ">
              <h1> KIDS MENU</h1>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card mb-30">
              <Link className="card-img-tiles" to="https://www.toasttab.com/homekitchen/v3/add/77bba549-c0cf-4106-8ef0-90332f997dca/880a245f-97ff-420f-916f-9a7587001e8a" data-abc="true">
                <div className="inner">
                  <div className="main-img">
                    <img src={bslider1} alt="Category" />
                  </div>
                  <div className="thumblist">
                    <img src={bslider2} alt="Category" />
                    <img src={bslider3} alt="Category" />
                  </div>
                </div>
              </Link>
              <div className="card-body text-center">
                <h4 className="card-title">Burger Sliders</h4>
                <p className="text-muted">Starting from $8</p>
                <div className='addtocart-btn'>
                  <Link
                    className="btn btn-outline-primary btn-sm"
                    to="https://www.toasttab.com/homekitchen/v3/add/77bba549-c0cf-4106-8ef0-90332f997dca/880a245f-97ff-420f-916f-9a7587001e8a"
                    data-abc="true"
                  >
                    Add to Cart
                  </Link>
                  <Link
                    className="btn btn-outline-primary btn-sm"
                    to="#"
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
                <Link className="card-img-tiles" to="https://www.toasttab.com/homekitchen/v3/add/692ed163-e20e-4400-8e2f-c3b36425682f/880a245f-97ff-420f-916f-9a7587001e8a" data-abc="true">
                  <div className="inner">
                    <div className="main-img">
                      <img src={cslider2} alt="Category" />
                    </div>
                    <div className="thumblist">
                      <img src={cslider1} alt="Category" />
                      <img src={cslider3} alt="Category" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="card-body text-center">
                <h4 className="card-title">Chicken Sliders</h4>
                <p className="text-muted">Starting from $8</p>
                <div className='addtocart-btn'>
                  <Link
                    className="btn btn-outline-primary btn-sm"
                    to="https://www.toasttab.com/homekitchen/v3/add/692ed163-e20e-4400-8e2f-c3b36425682f/880a245f-97ff-420f-916f-9a7587001e8a"
                    data-abc="true"
                  >
                    Add to Cart
                  </Link>
                  <Link
                    className="btn btn-outline-primary btn-sm"
                    to="#"
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

    </div>
  )
}

export default KidManu