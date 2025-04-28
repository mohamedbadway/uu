import React, { useContext, useEffect, useState } from 'react'
import Banner from '../../components/banner/Banner'
import { FaStar } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { BiAbacus } from "react-icons/bi";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import GetStart from '../../reusablecomponents/GetStart';
import {  useParams } from 'react-router-dom';
import { CartContext } from '../../hooks/CartContext';
import { addToCart, getCart } from '../../api/cart';
import { getSingleCourse } from '../../api/courses';
import thumbnailimg from "../../assets/images/thumbnail_img_2.png";
import courseimg from "../../assets/images/course_details_img.jpg";


const CourseDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [course, setCourse] = useState([]);
  const { id } = useParams();
  const {setCounter, cartItems, setCartItems } = useContext(CartContext);
  useEffect(() => {
    getSingleCourse(id).then((result) => setCourse(result)).catch((error) => console.error("Error fetching course details:", error));
  }, [id]);


  const handleToCart = async () => {
    const isAlreadyInCart = cartItems.some(item => item.id === course.id);
    if (!isAlreadyInCart) {
      await addToCart(course);
      const updatedCart = await getCart();
      setCartItems(updatedCart);
      setCounter(updatedCart.length);
    }
  };

  return (
    <>
    <section className=''>
    <Banner  background={"#fff0e5"} className={"banner course-details"}>
      <div className='row align-items-center justify-content-lg-between'>
        <div className='col1 col-lg-6'>
          <div className='content'>
            <h1 className='title'>{course.title}</h1>
            <p>{course.description}</p>
            <ul className='content-list'>
              <li>
                <div className='post-admin d-flex align-items-center'>
                  <div className='image-wrap'>
                    <img src={thumbnailimg} alt='image'/>
                  
                  </div>
                  <div className='info'>
                    <span class="d-block">Created By</span>
                    <small class="d-block">Marina Ndrose</small>
                  </div>
                </div>
              </li>
              <li>
                <span class="d-block">Last update</span>
                <small class="d-block">11 Nov, 2022</small>
              </li>
              <li>
                <span>Review</span>
                <div class="star">
    
                <FaStar className='icon' />
                  <small>(4.5)</small>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='col1 col-lg-4'>
          <div className='details-vid'>
            <img src={courseimg}/>
            <a className='play-btn'href=''>
              <span>
                <small>
                <FaPlay className='icon'/>
                </small>
              </span>
            </a>
          </div>
        </div>
      </div>

    </Banner>
    <div className='details-info'>
      <div className='container'>
        <div className='row justify-content-lg-between'>
          <div className='col1 col-lg-7'>
            <div className='heading'>
              <h3 className='title'>Short Overview</h3>
              <p>
              Python is a general-purpose, versatile and popular programming language. Python is also a great first language because it is concise and easy to read. A good language to have in any programmer’s stack, Python can be used for everything from web development to software development and data science applications.
              </p>
            </div>  
            <div className='row'>
              <div className='col1 col-md-6'>
                <ul className='list'>
                  <li>
                    <FaCheck className='icon'/>
                    <span>Fundamental programming concepts</span>
                  </li>
                  <li>
                    <FaCheck className='icon'/>
                    <span>Python 3 is the most up-to-date version</span>
                  </li>
                  <li>
                    <FaCheck className='icon'/>
                    <span>increase the efficiency and simplicity of the Python</span>
                  </li>
                </ul>
              </div>
              <div className='col1 col-md-6'>
                <ul className='list'>
                  <li>
                    <FaCheck className='icon'/>
                    <span>Fundamental programming concepts</span>
                  </li>
                  <li>
                    <FaCheck className='icon'/>
                    <span>Python 3 is the most up-to-date version</span>
                  </li>
                  <li>
                    <FaCheck className='icon'/>
                    <span>increase the efficiency and simplicity of the Python</span>
                  </li>
                </ul>
              </div>
            </div>
            

          </div>
          <div className='col1 col-lg-4'>
            <aside className='sidebar'>
              <div className='widget'>
                <div className='d-flex align-items-center justify-content-start'>
                  <div className='price'>
                    <span >${course.price}</span>
                  </div>
                </div>
                <button className='btn' onClick={handleToCart}>
                  <FaCartPlus className='icon me-1' />
                  <span>
                    <small>Add To Cart</small>
                    <small>Add To Cart</small>
                  </span>

                </button>
                <ul className='cart-info'>
                  <li>
                    <span>
                    <FaRegClock className='icon me-1' />
                    Duration
                    </span>
                    <span>52 Mins</span>
                  </li>
                  <li>
                    <span>
                    <BiAbacus className='icon me-1' />
                    Level
                    </span>
                    <span>{course.level}</span>
                  </li>
                  <li>
                    <span>
                    <FaRegFileAlt className='icon me-1'/>
                    Lectures
                    </span>
                    <span>
                     {course.lessons} Lectures
                    </span>
                  </li>
                  <li>
                    <span>
                    <FaRegUser className='icon me-1' />
                    Enrolled
                    </span>
                    <span>03 Enrolled</span>
                  </li>
                </ul>
                <h3 class="info-title text-center">Share This Course</h3>
                <div className='social-links'>
                  <ul className='social-icons'>
                    <li>
                      <a href='#!' className='facebook'>
                      <FaFacebookF className='social-icon' />
                      <FaFacebookF className='social-icon'/>
                        
                      </a>
                    </li>
                    <li>
                      <a href='#!' className='twitter'>
                      <FaTwitter className='social-icon'/>
                      <FaTwitter className='social-icon'/>

                      </a>
                    </li>
                    <li>
                      <a href='#!' className='linkdin'>
                      <FaLinkedinIn className='social-icon'/>
                      <FaLinkedinIn className='social-icon'/>

                      </a>
                    </li>
                    <li>
                      <a href='#!' className='youtube'>
                      <FaYoutube className='social-icon'/>
                      <FaYoutube className='social-icon'/>

                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </aside>
          </div>

        </div>
      </div>
    </div>
    </section>
    <GetStart/>
      
    </>
  )
}

export default CourseDetails