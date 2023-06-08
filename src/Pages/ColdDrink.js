import React from 'react'
import { Link } from 'react-router-dom'
import  data from '../../src/data.json'


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

          {data.cold_drinks.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
              <div className="card mb-30">
                <Link className="card-img-tiles" to={item.link} data-abc="true">
                  <div className="inner">
                    <div className="main-img">
                      <img src={item.mainImage} alt="Category" style={{ height: '200px' }} />
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
                    <Link className="btn btn-outline-warning btn-sm" to={item.addToCartLink} data-abc="true">
                      Add to Cart
                    </Link>
                    <Link className="btn btn-outline-primary btn-sm" to={item.viewProductLink} data-abc="true">
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}







          {/* <div className="col-lg-4 col-md-6 col-sm-6">
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
                    to="https://www.toasttab.com/homekitchen/v3#db2b9c696-da84-4f10-ad7f-a93edae53f86d393a567b-ee1d-4203-bf3c-bec135a6dd8f"
                    data-abc="true"
                  >
                    Viwe Product
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-4 col-md-6 col-sm-6">
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
                    to="https://www.toasttab.com/homekitchen/v3/add/ec0da94b-4ca3-4576-acc5-8349de4f6293/393a567b-ee1d-4203-bf3c-bec135a6dd8f"
                    data-abc="true"
                  >
                    Viwe Product
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card mb-30">
              <div className='addtocart-btn'>
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
              </div>
              <div className="card-body text-center">
                <h4 className="card-title">strawbery Milkshak</h4>
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
                    to="https://www.toasttab.com/homekitchen/v3#db2b9c696-da84-4f10-ad7f-a93edae53f86d393a567b-ee1d-4203-bf3c-bec135a6dd8f"
                    data-abc="true"
                  >
                    Viwe Product
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-4 col-md-6 col-sm-6">
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
          </div> */}
          {/* <div className="col-lg-4 col-md-6 col-sm-6">
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
                    to="https://www.toasttab.com/homekitchen/v3/add/c5acc4d1-a86e-4c91-9e06-4cc109e3a13d/393a567b-ee1d-4203-bf3c-bec135a6dd8f"
                    data-abc="true"
                  >
                    Viwe Product
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-4 col-md-6 col-sm-6">
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
                    to="https://www.toasttab.com/homekitchen/v3/add/ebe58e05-cfcd-4767-9b2a-ccaf169b39e0/393a567b-ee1d-4203-bf3c-bec135a6dd8f"
                    data-abc="true"
                  >
                    Viwe Product
                  </Link>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    
    </div>
  )
}

export default ColdDrink