import React, { useEffect, useState } from 'react'
import Banner from '../../components/banner/Banner'
import { getCourses } from '../../api/courses';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import CourseCard from '../../reusablecomponents/CourseCard';
import GetStart from '../../reusablecomponents/GetStart';

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses().then((result) => setCourses(result));
  }, []);
  return (
    <>
      <Banner className={'banner page-banner'} background={" linear-gradient(0deg, transparent, #fff0e5, #fff0e5)"} >
        <h1 className='banner-header'> Our Courses </h1>
        <ul className='banner-list'>
          <li ><a href='/'> Home</a></li>
          <li >Our Courses</li>
        </ul>
      </Banner>
      <section className='courses'>
      <div className='container'>
        <div className='section-header'>
        <div className='row align-items-center'>
          <div className='col-12 col1'>
            <h2 className='section-title mb-0 text-center' >
              Most popular <span class="focus-text">courses</span>
            </h2>
          </div>
        </div>
        </div>
        <div className='row' >
          {courses.map((course) => (
          <div className='col1 col-lg-3 col-md-6 col-sm-6' key={course.id}>
            <CourseCard key={course.id} setCourses={setCourses} course={course}/>
          </div>
          ))}
        </div>
      </div>
    </section>
    <GetStart/>
      
    </>
  )
}

export default Courses
