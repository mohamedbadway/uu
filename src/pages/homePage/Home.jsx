import React, { useEffect, useRef, useState } from 'react'
import Banner from '../../components/banner/Banner'
import { CiSearch } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import CategoryCard from '../../reusablecomponents/CategoryCard';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import CourseCard from '../../reusablecomponents/CourseCard';
import { getCourses } from '../../api/courses';
import Counter from '../../reusablecomponents/CounterSection';
import SlikList from '../../reusablecomponents/SlickList';
import Testimonial from '../../reusablecomponents/Testimonial';
import GetStart from '../../reusablecomponents/GetStart';
import icon1 from "../../assets/images/icon_test_tube.png";
import icon2 from "../../assets/images/icon_calendar.png";
import icon3 from "../../assets/images/icon_design.png";
import icon4 from "../../assets/images/icon_briefcase.png";
import bannerimg1 from "../../assets/images/banner_img_1.png";
import bannerimg2 from "../../assets/images/banner_img_2.png";
import bannerimg3 from "../../assets/images/banner_img_3.png";
import shape1 from "../../assets/images/shape_1.png";
import shape2 from "../../assets/images/shape_2.png";
import lineshape2 from "../../assets/images/line_shape_2.png";
import blogimg1 from "../../assets/images/blog_img_1.jpg";
import blogimg2 from "../../assets/images/blog_img_2.jpg";
import blogimg3 from "../../assets/images/blog_img_3.jpg";



const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  // get courses 
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses().then((result) => setCourses(result));
  }, []);

  const item1Ref = useRef(null);
  const item2Ref = useRef(null);
  const item3Ref = useRef(null);

  const [offset1, setOffset1] = useState(0);
  const [offset2, setOffset2] = useState(0);
  const [offset3, setOffset3] = useState(0);

  const Scroll = () => {
    const top1 = item1Ref.current.getBoundingClientRect().bottom;
    setOffset1(top1 * 0.2);

    const top2 = item2Ref.current.getBoundingClientRect().bottom;
    setOffset2(top2 * -0.2);
      
    const top3 = item3Ref.current.getBoundingClientRect().bottom;
    setOffset3(top3 * -0.2); 
  };

  useEffect(() => {
    window.addEventListener('scroll', Scroll);
    return () => {
      window.removeEventListener('scroll', Scroll);
    };
  }, []);
  const Style1 = {
    transform: `translateY(${offset1}px)`,
    transition: 'transform 0.1s ease-out',
  };
  const Style2 = {
    transform: `translateY(${offset2}px)`,
    transition: 'transform 0.1s ease-out',
  };
  const Style3 = {
    transform: `translateX(${offset3}px)`,
    transition: 'transform 0.1s ease-out',
  };

  return (
    <>
    
    <Banner background={"#fff0e5"} className={"banner"}>
    <div className='row align-items-center justify-content-lg-between'>
      <div className='col-lg-6 order-lg-last col1'>
        <div className='banner-images'>
          <div className=' banner-image banner-image1 animate__animated animate__fadeInUp'>
            <img src={bannerimg1}/>

          </div>
          <div className=' banner-image banner-image2 animate__animated animate__fadeInUp'>
            <img src={bannerimg2}/>

          </div>
          <div className=' banner-image banner-image3 animate__animated animate__fadeInUp'>
            <img src={bannerimg3}/>

          </div>
        </div>

      </div>
      <div className='col-lg-5 col1'>
        <div className='banner-content'>
          <h1 className='banner-title'>
          The Easiest Way to <span class="focus-text">Learn</span> to new things
          </h1>
          <p>
          Changing lives, businesses, and nations through talent transformation in digital technologies.
          </p>
          <div className='search m-0'>
            <input type='search' name='search' placeholder='Search from 1000+ courses'/>
            <button type='submit' className='submit-btn'>
             <CiSearch className='submit-icon' />
            </button>
          </div>
          
        </div>
        

      </div>
      
    </div>
    </Banner>
    <section className='category'>
      <div className='container'>
        <div className='section-header'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col1'>
              <h2 className='section-title mb-0'>
                Most popular <span class="focus-text">categories</span>
              </h2>
            </div>
            <div className='col-lg-6 col1 d-lg-flex d-none justify-content-end'>
              <div className='show-more'>
                <a href='/courses' >
                Explore All Courses
                <MdKeyboardDoubleArrowRight className='icon'/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col1 col-lg-3 col-md-6 col-sm-6'>
            <CategoryCard title={"Chemistry"} icon={icon1}  />
          </div>
          <div className='col1 col-lg-3 col-md-6 col-sm-6'>
            <CategoryCard title={"Managment"} icon={icon2} />
          </div>
          <div className='col1 col-lg-3 col-md-6 col-sm-6'>
            <CategoryCard title={"Fine Art"} icon={icon3} />
          </div>
          <div className='col1 col-lg-3 col-md-6 col-sm-6'>
            <CategoryCard title={"Business"} icon={icon4} />
          </div>
        </div>
        <div className='show-more1 d-block d-lg-none text-center'>
          <a href='/courses' >
            Explore All Courses
            <MdKeyboardDoubleArrowRight className='icon'/>
          </a>
        </div>
      </div>
    </section>
    <section className='membership pb-0'>
      <div className='container'>
        <div className='membership-box text-center member-items'>
          <div className='row justify-content-center'>
            <div className='col1 col-lg-7'>
              <h2 className='title'>
              Get free Pro memberships for your high school class
              </h2>
              <Link to="/courses" className='btn1 ' >
                <span >
                <small>Explore All Courses</small>
                <small>Explore All Courses</small>
                </span>
            <FaArrowRightLong className='right-arrow ms-2'/>
            </Link>
            </div>
          </div>
          <div className='member-item1' ref={item1Ref} style={Style1} >
            <img src={shape1}/>
          </div>
          <div className='member-item2' ref={item2Ref} style={Style2}>
            <img src={shape2}/>
          </div>
          <div className='member-item3' ref={item3Ref} style={Style3}>
            <img src={lineshape2}/>
          </div>
        </div>
      </div>
    </section>
    <section className='courses'>
      <div className='container'>
        <div className='section-header'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col1'>
            <h2 className='section-title mb-0'>
              Most popular <span class="focus-text">courses</span>
            </h2>
          </div>
          <div className='col-lg-6 col1 d-lg-flex d-none justify-content-end'>
            <div className='show-more'>
              <a href='/courses' >
              Explore All Courses
              <MdKeyboardDoubleArrowRight className='icon'/>
              </a>
            </div>
          </div>
        </div>
        </div>
        <div className='row'>
          {courses.map((course) => (
          <div className='col1 col-lg-3 col-md-6 col-sm-6'>
            <CourseCard key={course.id} setCourses={setCourses} course={course}/>
          </div>
          ))}
        </div>
        <div className='show-more1 d-block d-lg-none text-center'>
          <a href='/courses' >
            Explore All Courses
            <MdKeyboardDoubleArrowRight className='icon'/>
          </a>
        </div>
      </div>
    </section>
    <section className='counter'>
      <Counter/>
    </section>
    <section className='sponser '>
      <div className='container'>
        <div class="section-header text-center">
          <h2 class="section-title mb-0">
            We are powered by <span class="focus-text">industry.</span>
          </h2>
        </div>
        <SlikList/>
      </div>
    </section>
    <section className='testimonial'>
    <Testimonial/>
    </section>
    <section className='blog'>
      <div className='container'>
        <div class="section-header text-center">
          <h2 class="section-title mb-0">
            Latest News & <span class="focus-text">article</span>
          </h2>
        </div>
        <div className='row justify-content-center'>
          <div className='col1 col-lg-6 col-sm-10'>
            <div className="blog-item">
              <a className='image' href=''>
                <img src={blogimg1} alt="Blog Image"/>
              </a>
              <div className="content">
                <ul className="post-meta ">
                  <li><a href="#!">Alen Mask</a></li>
                  <li>09 Aug</li>
                  <li><a href="#!">0 Comments</a></li>
                </ul>
                <h3 className="item-title">
                  <a href=''>
                    Everything You Need To Know To Kickstart A Career In UI/UX
                  </a>
                </h3>
                <p className="mb-0">
                  Want to learn how to become a UX Designer? Your first step is learning how to use Figma, which we'll cover in our new course.
                </p>
              </div>
            </div>
          </div>
          <div className='col1 col-lg-3 col-sm-10'>
          <div className="blog-item">
              <a className='image' href='#!'>
                <img src={blogimg2} alt="Blog Image"/>
              </a>
              <div className="content">
                <ul className="post-meta ">
                  <li><a href="#!">Alen Mask</a></li>
                  <li>09 Aug</li>
                  <li><a href="#!">0 Comments</a></li>
                </ul>
                <h3 className="item-title">
                  <a href=''>
                    Everything You Need To Know To Kickstart A Career In UI/UX
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className='col1 col-lg-3 col-sm-10'>
          <div className="blog-item">
              <a className='image' href=''>
                <img src={blogimg3} alt="Blog Image"/>
              </a>
              <div className="content">
                <ul className="post-meta ">
                  <li><a href="#!">Alen Mask</a></li>
                  <li>09 Aug</li>
                  <li><a href="#!">0 Comments</a></li>
                </ul>
                <h3 className="item-title">
                  <a href=''>
                    Everything You Need To Know To Kickstart A Career In UI/UX
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <GetStart/>


    </>
    
  )
}

export default Home