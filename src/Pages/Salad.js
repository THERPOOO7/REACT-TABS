import React from 'react'
import { Link } from 'react-router-dom'

import saladG1 from '../Images/saladG1.jpg'
import saladG2 from '../Images/saladG2.jpg'
import saladG3 from '../Images/saladG3.jpg'
import saladGr1 from '../Images/saladGr1.jpg'
import saladGr2 from '../Images/saladGr2.jpg'
import saladGr3 from '../Images/saladGr3.jpg'

const Salad = () => {
  return (
    <div>

      <div className="container mt-50">
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className="row ">
              <h1> SALAD </h1>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card mb-30">
              <Link className="card-img-tiles" to="https://www.toasttab.com/homekitchen/v3#d79517f6e-e11b-42fd-94bd-3f9be16c9254d3a6d4a63-4eeb-4cd0-ab9c-849f9ad3ee71" data-abc="true">
                <div className="inner">
                  <div className="main-img">
                    <img src={saladG1} alt="Category" />
                  </div>
                  <div className="thumblist">
                    <img src={saladG2} alt="Category" />
                    <img src={saladG3} alt="Category" />
                  </div>
                </div>
              </Link>
              <div className="card-body text-center">
                <h4 className="card-title">Garden Green</h4>
                <p className="text-muted">Starting from $7.25</p>
                <div className='addtocart-btn'>
                  <Link
                    className="btn btn-outline-primary btn-sm"
                    to="https://www.toasttab.com/homekitchen/v3#d79517f6e-e11b-42fd-94bd-3f9be16c9254d3a6d4a63-4eeb-4cd0-ab9c-849f9ad3ee71"
                    data-abc="true"
                  >
                    Add to Cart
                  </Link>
                  <Link
                    className="btn btn-outline-primary btn-sm"
                    to="https://www.toasttab.com/homekitchen/v3#d79517f6e-e11b-42fd-94bd-3f9be16c9254d3a6d4a63-4eeb-4cd0-ab9c-849f9ad3ee71"
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
                <Link className="card-img-tiles" to="https://www.toasttab.com/homekitchen/v3#d79517f6e-e11b-42fd-94bd-3f9be16c9254d3a6d4a63-4eeb-4cd0-ab9c-849f9ad3ee71" data-abc="true">
                  <div className="inner">
                    <div className="main-img">
                      <img src={saladGr2} alt="Category" style={{height:'200px'}} />
                    </div>
                    <div className="thumblist">
                      <img src={saladGr1} alt="Category" />
                      <img src={saladGr3} alt="Category" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="card-body text-center">
                <h4 className="card-title">Mixed Green</h4>
                <p className="text-muted">Starting from $8.2</p>
                <div className='addtocart-btn'>
                  <Link
                    className="btn btn-outline-primary btn-sm"
                    to="https://www.toasttab.com/homekitchen/v3#d79517f6e-e11b-42fd-94bd-3f9be16c9254d3a6d4a63-4eeb-4cd0-ab9c-849f9ad3ee71"
                    data-abc="true"
                  >
                    Add to Cart
                  </Link>
                  <Link
                    className="btn btn-outline-primary btn-sm"
                    to="https://www.toasttab.com/homekitchen/v3#d79517f6e-e11b-42fd-94bd-3f9be16c9254d3a6d4a63-4eeb-4cd0-ab9c-849f9ad3ee71"
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

export default Salad