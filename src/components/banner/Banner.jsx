import React, { useEffect, useState } from 'react'
import item1 from "../../assets/images/line_shape_1.png";
import item2 from "../../assets/images/dot_shape_2.png";

export default function Banner({children , background , className}) {

  const [scrollY, setScrollY] = useState(0);
  const bannerScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', bannerScroll);
    return () => {
      window.removeEventListener('scroll', bannerScroll);
    };
  }, []);
  const bannerStyle1 = {
    transform: `translateY(${scrollY * -0.2}px)`,
    transition: 'transform 0.3s ease-out',
  };
  const bannerStyle2 = {
    transform: `translateY(${scrollY * 0.2}px)`,
    transition: 'transform 0.3s ease-out',
  };
  return (
    <>
    <div className={className}  style={{background : background}}>
        <div className='container'>
            {children}
        </div>
        <div className='banner-item1' style={bannerStyle1}>
            <img src={item1}/>
        </div>
        <div className='banner-item2' style={bannerStyle2}>
            <img src={item2}/>
        </div>
    </div>
    </>
  )
}
