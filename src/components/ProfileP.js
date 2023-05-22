import React from 'react'
import team1 from '../Images/team2.jpg'
import {FaDribbble, FaTwitter, FaLinkedinIn, FaFacebookF} from 'react-icons/fa'
const ProfileP = () => {
  return (
      <div className='py-5'>
          <div className="cardP">
              <img src={team1} alt="John" style={{ width: "100%" }} />
              <h1>Home Kitchen</h1>
              <p className="titleP">CEO &amp; Founder</p>
              <p>Ganpat University</p>
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
