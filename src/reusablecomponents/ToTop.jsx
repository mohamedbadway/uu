import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa6";

const ToTop = () => {

  const [toTop , setToTop] = useState(false);
    function scrollTop (){
    if (window.scrollY > 100){
      setToTop(true)
    }
    else{
      setToTop(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollTop);
    return () => {
      window.removeEventListener('scroll', scrollTop);
    };
  }, []);
  return (
    <>
    <div className={`to-top ${toTop ? 'show' : 'hide'}`} >
      <a href='#' className='to-top-arrow' >
        <FaArrowUp className='top-icon' />       
        <FaArrowUp className='top-icon' />       
      </a>
    </div>
      
    </>
  )
}

export default ToTop
