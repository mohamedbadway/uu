import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/images/sponsor_logo_1.png";
import img2 from "../assets/images/sponsor_logo_2.png";
import img3 from "../assets/images/sponsor_logo_3.png";
import img4 from "../assets/images/sponsor_logo_4.png";
import img5 from "../assets/images/sponsor_logo_5.png";


const SlikList = () => {
      const [transform, setTransform] = useState({ x: 0, y: 0 });
        var settings = {
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,      
          cssEase: "linear",
          pauseOnHover: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,

              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow:1.5 ,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
          <ul className="slider-container sponser-items"> 
            <Slider {...settings}>
              <li>
                <a href='!#' className='' >
                  <img src={img1}/>
                </a>
              </li>
              <li>
                <a href='!#' className=''>
                  <img src={img2}/>
                </a>
              </li>
              <li>
                <a href='!#' className='' >
                  <img src={img3}/>
                </a>
              </li>
              <li>
                <a href='!#' className='' >
                  <img src={img4}/>
                </a>
              </li>
              <li>
                <a href='!#' className='' >
                  <img src={img5}/>
                </a>
              </li>
              <li>
                <a href='!#' className='' >
                  <img src={img1}/>
                </a>
              </li>
              <li>
                <a href='!#' className=''>
                  <img src={img2}/>
                </a>
              </li>
              <li>
                <a href='!#' className='' >
                  <img src={img3}/>
                </a>
              </li>
              <li>
                <a href='!#' className='' >
                  <img src={img4}/>
                </a>
              </li>
              <li>
                <a href='!#' className='' >
                  <img src={img5}/>
                </a>
              </li>
            </Slider>
          </ul>
        );
    

}

export default SlikList 

