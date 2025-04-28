import React, { useEffect } from 'react'
import Banner from '../../components/banner/Banner'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import SlikList from '../../reusablecomponents/SlickList'
import Counter from '../../reusablecomponents/CounterSection'
import Testimonial from '../../reusablecomponents/Testimonial'
import aboutimg1 from "../../assets/images/about_img_1.jpg"
import aboutimg2 from "../../assets/images/about_img_2.jpg"
import aboutimg3 from "../../assets/images/about_img_3.jpg"

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <>
    <Banner className={"banner page-banner"} background={" linear-gradient(0deg, transparent, #fff0e5, #fff0e5)"}>
    <h1 className='banner-header'> About Us </h1>
    <ul className='banner-list'>
        <li ><a href='/'> Home</a></li>
        <li >About Us</li>
    </ul>
    </Banner>
    <section className='about'>
      <div className='container'>
        <div className='row align-items-center justify-content-lg-between'>
          <div className='col1 col-lg-5'>
            <div className='about-image'>
              <div className='image'>
                <img src={aboutimg1}/>
              </div>

            </div>
          </div>
          <div className='col1 col-lg-6'>
            <div className='about-content'>
              <h2 className='title'>
              We want to create a world where anyone can build something meaningful
              </h2>
              <p>Give your team the knowledge, experience, and confidence they need to tackle any problem.We want to create a world where anyone can build something    meaningful </p>
              <Link to="/contact" className='btn1 ' >
                <span >
                <small>Contact Us</small>
                <small>Contact Us</small>
                </span>
            <FaArrowRightLong className='right-arrow ms-2'/>
            </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section className='sponser sp-about'>
      <div className='container'>
        <div class="section-header text-center">
          <h2 class="section-title mb-0">
          Our Partners
          </h2>
        </div>
        <SlikList/>
      </div>
    </section>
    <section className='goals'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col1 col-lg-4'>
            <div className='heading mb-lg-0'>
              <h2 className='title'>We have helped millions of people worldwide unlock technical skills</h2>
            </div>
          </div>
          <div className='col1 col-lg-4 col-md-6'>
            <div className='item'>
              <div className='image'>
                <img src={aboutimg2}/>
              </div>
              <div className='content'>
                <h3 className='title'> Our History </h3>
                <p className='mb-0'> our goal was to give anyone in the world the ability to learn the skills they’d need to succeed in the 21st century</p>
              </div>
            </div>
          </div>
          <div className='col1 col-lg-4 col-md-6'>
            <div className='item'>
              <div className='image'>
                <img src={aboutimg3}/>
              </div>
              <div className='content'>
                <h3 className='title'> Our Mission </h3>
                <p className='mb-0'> our goal was to give anyone in the world the ability to learn the skills they’d need to succeed in the 21st century</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='counter'>
      <Counter/>
    </section>
    <section className='testimonial about-test'>
    <Testimonial/>

    </section>
      
    </>
  )
}

export default About
