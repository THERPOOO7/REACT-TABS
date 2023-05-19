import React from 'react'
import { Link } from 'react-router-dom'

import vanila1 from '../Images/vanila1.jpg'
import vanila2 from '../Images/vanila2.jpg'
import vanila3 from '../Images/vanila3.jpg'

import chocolate1 from '../Images/chocolate1.jpg'
import chocolate2 from '../Images/chocolate2.jpg'
import chocolate3 from '../Images/chocolate3.png'

import strawberry1 from '../Images/strawberry1.png'
import strawberry2 from '../Images/strawberry2.png'
import strawberry3 from '../Images/strawberry3.png'

import sprite1 from '../Images/sprite1.jpg'
import sprite2 from '../Images/sprite2.jpg'
import sprite3 from '../Images/sprite3.jpg'

import polands1 from '../Images/polands1.jpg'
import polands2 from '../Images/polands2.jpg'
import polands3 from '../Images/polands3.jpg'

const ColdDrink = () => {
  return (
    <div>

      <div className="container mt-50">
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className="row ">
              <h1> COLD DRINKS</h1>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card mb-30">
              <Link className="card-img-tiles" to="https://www.toasttab.com/homekitchen/v3#db2b9c696-da84-4f10-ad7f-a93edae53f86d393a567b-ee1d-4203-bf3c-bec135a6dd8f" data-abc="true">
                <div className="inner">
                  <div className="main-img">
                    <img src={vanila1} alt="Category" style={{height:'200px'}} />
                  </div>
                  <div className="thumblist">
                    <img src={vanila2} alt="Category" />
                    <img src={vanila3} alt="Category" />
                  </div>
                </div>
              </Link>
              <div className="card-body text-center">
                <h4 className="card-title">Vanila Milkshak</h4>
                <p className="text-muted">Starting from $3</p>
                <div className='addtocart-btn'>
                  <Link
                    className="btn btn-outline-warning btn-sm"
                    to="https://www.toasttab.com/homekitchen/v3#db2b9c696-da84-4f10-ad7f-a93edae53f86d393a567b-ee1d-4203-bf3c-bec135a6dd8f"
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
                <Link className="card-img-tiles" to="https://www.toasttab.com/homekitchen/v3/add/ec0da94b-4ca3-4576-acc5-8349de4f6293/393a567b-ee1d-4203-bf3c-bec135a6dd8f" data-abc="true">
                  <div className="inner">
                    <div className="main-img">
                      <img src={chocolate3} alt="Category" />
                    </div>
                    <div className="thumblist">
                      <img src={chocolate1} alt="Category" />
                      <img src={chocolate2} alt="Category" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="card-body text-center">
                <h4 className="card-title">Chocolate Milkshak</h4>
                <p className="text-muted">Starting from $13</p>
                <div className='addtocart-btn'>
                  <Link
                    className="btn btn-outline-primary btn-sm"
                    to="https://www.toasttab.com/homekitchen/v3/add/ec0da94b-4ca3-4576-acc5-8349de4f6293/393a567b-ee1d-4203-bf3c-bec135a6dd8f"
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
              <Link className="card-img-tiles" to="https://www.toasttab.com/homekitchen/v3#db2b9c696-da84-4f10-ad7f-a93edae53f86d393a567b-ee1d-4203-bf3c-bec135a6dd8f" data-abc="true">
                <div className="inner">
                  <div className="main-img">
                    <img src={strawberry3} alt="Category" />
                  </div>
                  <div className="thumblist">
                    <img src={strawberry2} alt="Category" />
                    <img src={strawberry1} alt="Category" />
                  </div>
                </div>
              </Link>
              <div className="card-body text-center">
                <h4 className="card-title">Strowbarry Milkshak</h4>
                <p className="text-muted">Starting from $3</p>
                <div className='addtocart-btn'>
                  <Link
                    className="btn btn-outline-primary btn-sm"
                    to="https://www.toasttab.com/homekitchen/v3#db2b9c696-da84-4f10-ad7f-a93edae53f86d393a567b-ee1d-4203-bf3c-bec135a6dd8f"
                    data-abc="true"
                  >
                    Add to Cart

                  </Link>
                  <Link
                    className="btn btn-outline-primary btn-sm"
                    to="#"
                    data-abc="true"
                  >
                    Viwe product

                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card mb-30">
              <Link className="card-img-tiles" to="https://www.toasttab.com/homekitchen/v3/add/c5acc4d1-a86e-4c91-9e06-4cc109e3a13d/393a567b-ee1d-4203-bf3c-bec135a6dd8f" data-abc="true">
                <div className="inner">
                  <div className="main-img">
                    <img src={sprite2} alt="Category" />
                  </div>
                  <div className="thumblist">
                    <img src={sprite1} alt="Category" />
                    <img src={sprite3} alt="Category" />
                  </div>
                </div>
              </Link>
              <div className="card-body text-center">
                <h4 className="card-title">Sprite</h4>
                <p className="text-muted">Starting from $1.5</p>
                <div className='addtocart-btn'>
                  <Link
                    className="btn btn-outline-primary btn-sm"
                    to="https://www.toasttab.com/homekitchen/v3/add/c5acc4d1-a86e-4c91-9e06-4cc109e3a13d/393a567b-ee1d-4203-bf3c-bec135a6dd8f"
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
              <Link className="card-img-tiles" to="https://www.toasttab.com/homekitchen/v3/add/ebe58e05-cfcd-4767-9b2a-ccaf169b39e0/393a567b-ee1d-4203-bf3c-bec135a6dd8f" data-abc="true">
                <div className="inner">
                  <div className="main-img">
                    <img src={polands1} alt="Category" />
                  </div>
                  <div className="thumblist">
                    <img src={polands2} alt="Category" />
                    <img src={polands3} alt="Category" />
                  </div>
                </div>
              </Link>
              <div className="card-body text-center">
                <h4 className="card-title">Poland Springs</h4>
                <p className="text-muted">Starting from $1</p>
                <div className='addtocart-btn'>
                  <Link
                    className="btn btn-outline-primary btn-sm"
                    to="https://www.toasttab.com/homekitchen/v3/add/ebe58e05-cfcd-4767-9b2a-ccaf169b39e0/393a567b-ee1d-4203-bf3c-bec135a6dd8f"
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

export default ColdDrink