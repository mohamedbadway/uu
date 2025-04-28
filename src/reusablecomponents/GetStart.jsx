import React, { useEffect, useRef, useState } from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import image1 from "../assets/images/line_shape_4.png";
import image2 from "../assets/images/shape_5.png";

const GetStart = () => {
    const item1Ref = useRef(null);
    const item2Ref = useRef(null);
  
    const [offset1, setOffset1] = useState(0);
    const [offset2, setOffset2] = useState(0);
  
    const Scroll = () => {
      const top1 = item1Ref.current.getBoundingClientRect().top;
      setOffset1(top1 * 0.3 );
  
      const top2 = item2Ref.current.getBoundingClientRect().top;
      setOffset2(top2* -0.3 );
        
    };
  
    useEffect(() => {
      window.addEventListener('scroll', Scroll);
      return () => {
        window.removeEventListener('scroll', Scroll);
      };
    }, []);
    const Style1 = {
      transform: `translateY(${offset1 }px)`,
      transition: 'transform 0.1s ease-out',
    };
    const Style2 = {
      transform: `translateY(${offset2 }px)`,
      transition: 'transform 0.1s ease-out',
    };
  return (
    <section className='getstart text-center'>
        <div className='container'>
            <h2 className='text'>
            Ready to kick-start your career?
            </h2>
            <Link to="" className='btn1 ' >
                    <span >
                    <small>Try It For Free</small>
                    <small>Try It For Free</small>
                    </span>
                <MdKeyboardDoubleArrowRight className='icon ms-2'/>
            </Link>
        </div>
        <div className='getstart-item getstart-item1' ref={item1Ref} style={Style1}>
            <img src={image1}/>
        </div>
        <div className='getstart-item getstart-item2' ref={item2Ref} style={Style2}>
            <img src={image2}/>
        </div>
    </section>
  )
}

export default GetStart
