import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import data from '../../src/data.json'


const KidManu = () => {

  // const [isLoading, setIsLoading] = useState(true); // Add isLoading state


  // useEffect(() => {
  //   // Simulate an asynchronous operation
  //   setTimeout(() => {
  //     setIsLoading(false); // Set isLoading to false after the delay (e.g., when the data is loaded)
  //   }, 1000); // Change the delay time as needed
  // }, []);

  return (
    <div>

      <div className="container mt-50">
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className="row ">
              <h1> KIDS MENU</h1>
            </div>
          </div>

          {data.kidmanu.map((item, index) => (
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

export default KidManu


















































































{/* <div className="col-lg-4 col-md-6 col-sm-6">
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
          to="https://www.toasttab.com/homekitchen/v3/add/692ed163-e20e-4400-8e2f-c3b36425682f/880a245f-97ff-420f-916f-9a7587001e8a"
          data-abc="true"
        >
          Viwe Product
        </Link>
      </div>
    </div>
  </div>
</div> */}