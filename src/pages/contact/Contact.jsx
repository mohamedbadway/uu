import React, { useEffect } from 'react'
import Banner from '../../components/banner/Banner'
import ContactCard from '../../reusablecomponents/ContactCard'
import { FaRegPaperPlane } from 'react-icons/fa'
import GetStart from '../../reusablecomponents/GetStart'
import icon1 from "../../assets/images/icon_support.png";
import icon2 from "../../assets/images/icon_email.png";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <>
    <Banner className={'banner page-banner'} background={" linear-gradient(0deg, transparent, #fff0e5, #fff0e5)"} >
        <h1 className='banner-header'> Contact Us </h1>
        <ul className='banner-list'>
          <li ><a href='/'> Home</a></li>
          <li> Contact Us</li>
        </ul>
    </Banner>
    <div className='contact'>
      <div className='container'>
        <div className='section1'>
          <div className='row justify-content-center'>
            <div className='col1 col-lg-4'>
              <ContactCard title={"Our Telephone"} listItem1={"+1(800)123-4566"} listItem2={"+458-123-657-2324"} icon={icon1}/>
            </div>
            <div className='col1 col-lg-4'>
              <ContactCard title={"Send us mail"} listItem1={"udemo@email.com"} listItem2={"help@ourmail.com"} icon={icon2}/>
            </div>
            <div className='col1 col-lg-4'>
              <ContactCard title={"Address"} item1={"176 W street name,"} item2={"New York, NY 10014"} icon={icon1}/>
            </div>
          </div>

        </div>
        <div className='row justify-content-center '>
          <div className='col1 col-lg-9'>
            <div class="form-wrapper">
              <h2 class="contact-title text-center">Have a quetions?</h2>
              <form action="#">
                <div class="row">
                  <div class="col1 col-md-6">
                    <div class="form-item m-0">
                      <input type="text" name="fullname" placeholder="Your Full Name"/>
                    </div>
                  </div>
                  <div class="col1 col-md-6">
                    <div class="form-item m-0">
                      <input type="email" name="email" placeholder="Your Email"/>
                    </div>
                  </div>
                  <div class="col1 col-md-6">
                    <div class="form-item m-0">
                      <input type="tel" name="telephone" placeholder="Phone Number"/>
                    </div>
                  </div>
                  <div class="col1 col-md-6">
                    <div class="form-item m-0">
                      <input type="text" name="suject" placeholder="Subject"/>
                    </div>
                  </div>
                  <div class="col1">
                    <div class="form-item form-item1">
                      <textarea name="massage" placeholder="Write A Massage"></textarea>
                    </div>
                    <div class="text-center">
                      <button type="submit" class="btn ">
                        <span>
                          <small>Send Message</small>
                          <small>Send Message</small>
                        </span>
                        <FaRegPaperPlane className='ms-2' />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
              
          </div>
        </div>
      </div>
    </div>
    <GetStart/>
      
    </>
  )
}

export default Contact





