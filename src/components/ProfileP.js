import React from 'react'
import team1 from '../Images/team2.jpg'
import {FaDribbble, FaTwitter, FaLinkedinIn, FaFacebookF} from 'react-icons/fa'
import {CiLocationOn} from 'react-icons/ci'


const ProfileP = () => {
  return (
      <div className='py-5'>
          <div className="cardP">
              <img src={team1} alt="John" style={{ width: "100%" }} />
              <h1>Saint Joseph</h1>
              <p className="titleP"><CiLocationOn />  Ahmedabad</p>
              <div className='col-12'>
                <div className='row'>
                      <div className='col-3'>
                          <h5>Reviwe </h5>
                      </div>
                      <div className='col-3'>
                          <h5>Photos </h5>
                      </div>
                      <div className='col-3'>
                          <h5>Followers </h5>
                      </div>
                      <div className='col-3'>
                          <h5>Order </h5>
                      </div>
                </div>
                <div className='row'>
                      <div className='col-3'>
                          <p>34 </p>
                      </div>
                      <div className='col-3'>
                          <p>26 </p>
                      </div>
                      <div className='col-3'>
                          <p>89 </p>
                      </div>
                      <div className='col-3'>
                          <p>100 </p>
                      </div>
                </div>

                
              </div>
              <div style={{ margin: "24px 0" }}>
                  <a href="#">
                      <i className="fa fa-dribbble"><FaDribbble/></i>
                  </a>
                  <a href="#">
                      <i className="fa fa-twitter"><FaTwitter/></i>
                  </a>
                  <a href="#">
                      <i className="fa fa-linkedin"><FaLinkedinIn/></i>
                  </a>
                  <a href="#">
                      <i className="fa fa-facebook"><FaFacebookF/></i>
                  </a>
              </div>
              <div className='contact_me'>
                  <button>Contact</button>
              </div>
          </div>
    </div>
  )
}

export default ProfileP
