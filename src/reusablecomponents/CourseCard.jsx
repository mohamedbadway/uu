import React, { useContext, useEffect, useState } from 'react'
import { BsArrowRight } from "react-icons/bs";
import { GoBook } from "react-icons/go";
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';
// import { CartContext } from '../hooks/CartContext';
// import { addToCart, getCart } from '../api/cart';

const CourseCard = ({course }) => {
    const [popCard , setPopCard] = useState(false);


//    const { setCounter, cartItems, setCartItems } = useContext(CartContext);
//    const handleToCart = async () => {
//     const isAlreadyInCart = cartItems.some(item => item.id === course.id);
//     if (!isAlreadyInCart) {
//       await addToCart(course);
//       const updatedCart = await getCart();
//       setCartItems(updatedCart);
//       setCounter(updatedCart.length);
//     }
//   };  
    
  return (
      <>
    <div className='course-card ' >
        <div className='card-image'>
            <Link className='image' onClick={()=>{setPopCard(true)}} >
                <img src={course.image}/>
                <BsArrowRight className='icon' />
            </Link>
        </div>
        <div className='card-content'>
            <ul className='top-info'>
                <li className='tutor'>{course.tutor}</li>
                <li className='price'> {course.price}$ </li>
            </ul>
            <h3 className='title'>
                <Link  className='' to={`/courseDetails/${course.id}`}>{course.title}</Link>
            </h3>
            <ul className='info'>
                <li className='level'>
                <FaBars className='icon' />
                {course.level}
                </li>
                <li className='lessons'>
                  <GoBook className='icon' /> 
                  {course.lessons} Lessons


                </li>
            </ul>
 
        </div>
        {
            popCard &&(

    <div className='card-popUp ' onClick={()=>{setPopCard(false)}}>
       <div className='pop-wrapper'>
        <Link className='title' to={`/courseDetails/${course.id}`}>
            <h3>{course.title}</h3>
        </Link>
        <div className='info'>
            <h5>Level : <span>{course.level}</span></h5>
            <p> {course.description} </p>
        </div>
        <Link className='btn btn1' to={"/signup"}>
            <span>
            <small>Enroll Now</small>
            <small>Enroll Now</small>
            </span>
        </Link>
        <Link className='btn'  to={`/courseDetails/${course.id}`} >
            
            <span>
            <small>Go To Details</small>
            <small>Go To Details</small>
            </span>
        </Link>
       </div>
    </div>
            )
        }
    </div>
      
    </>
  )
}

export default CourseCard
