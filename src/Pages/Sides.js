import React from 'react'
import { Link } from 'react-router-dom'
import maccheese1 from '../Images/maccheese1.jpg'
import maccheese2 from '../Images/maccheese2.jpg'
import maccheese3 from '../Images/maccheese3.jpg'
import ffries1 from '../Images/ffries1.jpg'
import ffries2 from '../Images/ffries2.jpg'
import ffries3 from '../Images/ffries3.jpg'
import spuds1 from '../Images/spuds1.jpg'
import spuds2 from '../Images/spuds2.jpg'
import spuds3 from '../Images/spuds3.jpg'
import chips1 from '../Images/chips1.jpg'
import chips2 from '../Images/chips2.jpg'
import chips3 from '../Images/chips3.jpg'

const Sides = () => {
  return (
    <div>

<div className="container mt-50">
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
      <div className="row ">
        <h1> SIDES</h1>
      </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card mb-30">
            <Link className="card-img-tiles" to="https://www.toasttab.com/homekitchen/v3/add/14c02f3d-eaa0-4df1-910d-de1c1540783d/5add974f-9506-4f0f-ac2f-4d21846dafc2" data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={maccheese1} alt="Category" />
                </div>
                <div className="thumblist">
                  <img src={maccheese2} alt="Category" />
                  <img src={maccheese3} alt="Category" />
                </div>
              </div>
            </Link>
            <div className="card-body text-center">
              <h4 className="card-title">MAC & CHEESE</h4>
              <p className="text-muted">Starting from $4</p>
             <div className='addtocart-btn'> 
              <Link
                className="btn btn-outline-primary btn-sm"
                to="https://www.toasttab.com/homekitchen/v3/add/14c02f3d-eaa0-4df1-910d-de1c1540783d/5add974f-9506-4f0f-ac2f-4d21846dafc2"
                data-abc="true"
              >
                Add to Cart
              </Link>
              <Link
                className="btn btn-outline-primary btn-sm"
                to=""
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
            <Link className="card-img-tiles" to="https://www.toasttab.com/homekitchen/v3/add/f3835752-2a1d-4c67-9725-ead6fab62097/5add974f-9506-4f0f-ac2f-4d21846dafc2" data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={ffries1} alt="Category" />
                </div>
                <div className="thumblist">
                  <img src={ffries2} alt="Category" />
                  <img src={ffries3} alt="Category" />
                </div>
              </div>
            </Link>
            </div>
            <div className="card-body text-center">
              <h4 className="card-title">FRIES</h4>
              <p className="text-muted">Starting from $5</p>
              <div className='addtocart-btn'>
              <Link
                className="btn btn-outline-primary btn-sm"
                to="https://www.toasttab.com/homekitchen/v3/add/f3835752-2a1d-4c67-9725-ead6fab62097/5add974f-9506-4f0f-ac2f-4d21846dafc2"
                data-abc="true"
              >
                Add to Cart
              </Link>
              <Link
                className="btn btn-outline-primary btn-sm"
                to="https://www.toasttab.com/homekitchen/v3/add/f3835752-2a1d-4c67-9725-ead6fab62097/5add974f-9506-4f0f-ac2f-4d21846dafc2"
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
            <Link className="card-img-tiles" to="" data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={spuds1} alt="Category" />
                </div>
                <div className="thumblist">
                  <img src={spuds2} alt="Category" />
                  <img src={spuds3} alt="Category" />
                </div>
              </div>
            </Link>
            <div className="card-body text-center">
              <h4 className="card-title">Loaded Spuds</h4>
              <p className="text-muted">Starting from $8.99</p>
              <div className='addtocart-btn'>
              <Link
                className="btn btn-outline-primary btn-sm"
                to=""
                data-abc="true"
              >
                Add to Cart
                
              </Link>
              <Link
                className="btn btn-outline-primary btn-sm"
                to=""
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
            <Link className="card-img-tiles" to="https://www.toasttab.com/homekitchen/v3/add/f55b215c-ae52-43b8-8231-e919d90c2534/5add974f-9506-4f0f-ac2f-4d21846dafc2" data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={chips1} alt="Category" />
                </div>
                <div className="thumblist">
                  <img src={chips2} alt="Category" />
                  <img src={chips3} alt="Category" />
                </div>
              </div>
            </Link>
            <div className="card-body text-center">
              <h4 className="card-title">Chips</h4>
              <p className="text-muted">Starting from $4.5</p>
              <div className='addtocart-btn'>
              <Link
                className="btn btn-outline-primary btn-sm"
                to="https://www.toasttab.com/homekitchen/v3/add/f55b215c-ae52-43b8-8231-e919d90c2534/5add974f-9506-4f0f-ac2f-4d21846dafc2"
                data-abc="true"
              >
                Add to Cart
              </Link>
              <Link
                className="btn btn-outline-primary btn-sm"
                to=""
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

export default Sides