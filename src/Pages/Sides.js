import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../src/data.json'


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


      {data.sides.map((item, index) => (
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

    </div>
  )
}

export default Sides












































































{/* <div className="col-lg-4 col-md-6 col-sm-6">
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
          to="https://www.toasttab.com/homekitchen/v3/add/14c02f3d-eaa0-4df1-910d-de1c1540783d/5add974f-9506-4f0f-ac2f-4d21846dafc2"
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
      <div className='addtocart-btn'>
      <Link className="card-img-tiles" to="https://www.toasttab.com/homekitchen/v3/add/f3835752-2a1d-4c67-9725-ead6fab62097/5add974f-9506-4f0f-ac2f-4d21846dafc2" data-abc="true">
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
      </div>
      <div className="card-body text-center">
        <h4 className="card-title">LOADED SPUDS</h4>
        <p className="text-muted">Starting from $8.99</p>
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
          to="https://www.toasttab.com/homekitchen/v3/add/f55b215c-ae52-43b8-8231-e919d90c2534/5add974f-9506-4f0f-ac2f-4d21846dafc2"
          data-abc="true"
        >
          Viwe Product
        </Link>
        </div>
      </div>
    </div>
  </div>
   */}