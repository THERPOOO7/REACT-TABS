import React from 'react';
import logo from '../Images/HFLOGO.png'

const FooTer = () => {
    return (

        <>




            <div className="container-fluid footerBgColor">
                <div className='container'>
                    <footer className="row pt-5 border-top">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <a
                                href="https://homekitcheninc.com/"
                                className="d-flex align-items-center  link-dark text-decoration-none"
                            >
                                <img className='logosize' src={logo}></img>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <h5 className='text-white'>Opening Time</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <p className='text-white footerp'>Monday closed</p>
                                    <p className='text-white footerp'>Tuesday-saturday: 11:30AM to 8PM</p>
                                    <p className='text-white footerp'>Sunday 10:30AM to 3PM</p>
                                </li>
                            </ul>
                            <h5 className='text-white'>Address</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <p className='text-white footerp'>324 Chestnut Street,</p>
                                    <p className='text-white footerp'>Needham MA 02492</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <h5 className='text-white'>The Menu</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <p className='text-white footerp'> Take out</p>
                                    <p className='text-white footerp'> Tiffin(Mealplan) </p>
                                    <p className='text-white footerp'> Desserts</p>
                                    <p className='text-white footerp'> Homemade Products</p>
                                    <p className='text-white footerp'> Catering</p>
                                    <p className='text-white footerp'> Our Spacials</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <h5 className='text-white'>E-mail</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="mailto: homekitcheninc@gmail.com" className="nav-link p-0 text-white">
                                        homekitcheninc@gmail.com
                                    </a>
                                </li>
                            </ul>
                            <h5 className='text-white'>Phone-No</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <p><a href="tel: 781-347-2233"> 781-347-2233</a></p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-12 pt-4'>
                            <div
                            className="text-center pt-4 pb-3"
                            
                        >
                            <span className='text-white'> © 2019 Home Kitchen - Created by </span>
                            <a className="text-light " href="https://www.metizsoft.com/">
                                Metizsoftsolution.com
                            </a>
                        </div>
                        </div>
                    </footer>
                </div>




               
            </div>

        </>
    )
}

export default FooTer




           















































































{/* <svg className="bi me-2" width={40} height={32}>
    <use xlinkHref="#bootstrap" />
</svg> */}








            {/* <footer className="bg-light text-center text-lg-start">
                <div className="container  p-4 ">
                    <div className="row ">
                        <div className="col-lg-12 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">"Before placing your order, please inform your food server if a person in your party has a food allergy."

                                For more details please call us 781-347-2233 or email us homekitcheninc@gmail.com</h5>
                        </div>
                    </div>
                </div>

                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0,1)" }}
                >
                    © 2020 Copyright:
                    <a className="text-light" href="https://www.metizsoft.com/">
                        Metizsoftsolution.com
                    </a>
                </div>
            </footer> */}
