import React from 'react'
import burger6 from '../Images/burger8.png'
import sandwich_ani2 from '../Images/sandwich-ani2.jpg'
import salad1 from '../Images/saladani1.jpg'

const About = () => {
  return (
    <div>
      
      <div className="album  py-5 bg-light mt-5" >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  style={{ height: 225, width: "100%", display: "block"}}
                  src={burger6}
                  data-holder-rendered="true"
                />
                <div className="card-body">
                  <p className="card-text">
                    We are known for Providing best in class and test with diffrent types of Burgers 
                  </p>
                  {/* <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  src={sandwich_ani2}
                  data-holder-rendered="true"
                  style={{ height: 225, width: "100%", display: "block" }}
                />
                <div className="card-body">
                  <p className="card-text">
                    Our categories Sandwiches are Famouse in region with good orderbook
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  src={salad1}
                  data-holder-rendered="true"
                  style={{ height: 225, width: "100%", display: "block" }}
                />
                <div className="card-body">
                  <p className="card-text">
                    Salad is best food for who finding healthy food in diat 
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
        )
      }
      
      export default About

      


          