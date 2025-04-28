import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import whitelogo from "../../assets/images/site_logo_white.png";
import google from "../../assets/images/google_play.png";
import appstore from "../../assets/images/app_store.png";


const Footer = () => {
  return (
   <footer>
    <div className='footerr'>
      <div className='top-footer'>
        <div className='container'>
          <div className='row justify-content-lg-between'>
            <div className='col1 col-lg-3 col-md-6 col-sm-6'>
              <div className='site-logo'>
                <Link href='#' className='site-link'>
                <img src={whitelogo}/>
                </Link>
              </div>
              <p>
              Not everyone can afford to quit their job to learn full-time. We’re here to make coding more flexible and accessible
              </p>
              <ul className='socials'>
                <li >
                  <Link to={''} className='socials-link' >
                  <FaFacebookF className='socials-icon'/>
                  <FaFacebookF  className='socials-icon'/> 
                  </Link>
                </li>
                <li >
                  <Link to={''} className='socials-link'>
                  <FaTwitter  className='socials-icon'/> 
                  <FaTwitter  className='socials-icon'/> 
                  </Link>
                </li>
                <li >
                  <Link to={''} className='socials-link'>
                  <FaLinkedinIn  className='socials-icon'/> 
                  <FaLinkedinIn  className='socials-icon'/> 
                  </Link>
                </li>
                <li >
                  <Link to={''} className='socials-link' >
                  <FaYoutube  className='socials-icon'/> 
                  <FaYoutube  className='socials-icon'/> 
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col1 col-lg-2 col-md-6 col-sm-6'>
              <div className="widget">
                <h3 className="widget-title">Resources</h3>
                <ul className="page-list ">
                  <li><a href="#!">Projects</a></li>
                  <li><a href="#!">Challenges</a></li>
                  <li><a href="#!">Pro Membership</a></li>
                  <li><a href="#!">For Business</a></li>
                  <li><a href="#!">Support</a></li>
                </ul>
              </div>
            </div>
            <div className='col1 col-lg-2 col-md-6 col-sm-6'>
              <div className="widget">
                <h3 className="widget-title">Support</h3>
                <ul className="page-list">
                  <li><a href="#!">Web Development</a></li>
                  <li><a href="#!">Darta Science</a></li>
                  <li><a href="#!">Machine Leraning</a></li>
                  <li><a href="#!">Developer Tools</a></li>
                  <li><a href="#!">Web Design</a></li>
                </ul>
              </div>
            </div>
            <div className='col1 col-lg-2 col-md-6 col-sm-6'>
              <div className="widget">
                <h3 className="widget-title">Download Now</h3>
                <ul className="store-btns">
                  <li className='store-list'>
                    <a href="https://www.apple.com/app-store/" className='store-img'>
                      <img src={appstore} />
                    </a>
                  </li>
                  <li className='store-list'>
                    <a href="https://play.google.com/store/" className='store-img' >
                      <img src={google}/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="bottom-footer">
          <ul class="page-list">
            <li className='page-list-item'><a href="#!">Site Map</a></li>
            <li className='page-list-item'><a href="#!">Privacy Policy</a></li>
            <li className='page-list-item'><a href="#!">Terms & Condition</a></li>
            <li className='page-list-item'><a href="#!">Contact Us</a></li>
            <li className='page-list-item'><a href="#!">Forums</a></li>
          </ul>
          <p class="copyright-text mb-0">© Copyrights 2022 <a href='/' className='text-decoration-underline'>Udemo</a> All rights reserved.</p>
        </div>
      </div>
    </div>
   </footer>
  )
}

export default Footer

