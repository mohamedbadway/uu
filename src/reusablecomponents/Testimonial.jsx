import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import iconchat from "../assets/images/icon_chat.png";
import img1 from "../assets/images/testimonial_img_1.jpg";
import dotshape2 from "../assets/images/dot_shape_2.png";
import lineshape2 from "../assets/images/line_shape_1.png";

const Testimonial = () => {
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
    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,  
    };

  return (
    <>
      <div className='container'>
        <div className='testimonial-box'>
            <div className="slider-container">
        <Slider {...settings} className='row'>
                <div className='col1'>
                    <div className='testimonial-items'>
                        <div className='image'>
                            <img src={img1}/>
                        </div>
                        <div className='info'>
                            <div className='heading'>
                                <h3 className='title mb-0'>
                                Learner <span class="focus-text">Stories</span>
                                </h3>
                            </div>
                            <div className='icon'>
                                <img src={iconchat}/>
                            </div>
                            <p>We could actually read something and then practice it right away and get feedback on it. The other platforms were more theoretical and expected you to go figure out
                            </p>
                            <h4 class="client-name">Allen Hiroda</h4>
                            <span class="client-designation">Full stack web developer</span>
                        </div>
                    </div>
                </div>
                <div className='col1'>
                    <div className='testimonial-items'>
                        <div className='image'>
                            <img src={img1}/>
                        </div>
                        <div className='info'>
                            <div className='heading'>
                                <h3 className='title mb-0'>
                                Learner <span class="focus-text">Stories</span>
                                </h3>
                            </div>
                            <div className='icon'>
                                <img src={iconchat}/>
                            </div>
                            <p>We could actually read something and then practice it right away and get feedback on it. The other platforms were more theoretical and expected you to go figure out
                            </p>
                            <h4 class="client-name">Allen Hiroda</h4>
                            <span class="client-designation">Full stack web developer</span>
                        </div>
                    </div>
                </div>
                <div className='col1'>
                    <div className='testimonial-items'>
                        <div className='image'>
                            <img src={img1}/>
                        </div>
                        <div className='info'>
                            <div className='heading'>
                                <h3 className='title mb-0'>
                                Learner <span class="focus-text">Stories</span>
                                </h3>
                            </div>
                            <div className='icon'>
                                <img src={iconchat}/>
                            </div>
                            <p>We could actually read something and then practice it right away and get feedback on it. The other platforms were more theoretical and expected you to go figure out
                            </p>
                            <h4 class="client-name">Allen Hiroda</h4>
                            <span class="client-designation">Full stack web developer</span>
                        </div>
                    </div>
                </div>
        </Slider>
        </div>
            <div className='testimonial-item testimonial-item1' ref={item1Ref} style={Style1}>
                <img src={dotshape2}/>
            </div>
            <div className='testimonial-item testimonial-item2' ref={item2Ref} style={Style2}>
                <img src={lineshape2}/>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default Testimonial
