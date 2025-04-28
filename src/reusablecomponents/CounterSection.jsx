import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import shape3 from '../assets/images/shape_3.png';
import lineshape3 from '../assets/images/line_shape_3.png';
import dotshape4 from '../assets/images/dot_shape_4.png';
import shape4 from '../assets/images/shape_4.png';


const Counter = () => {
    const [counterState , setCounterState] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const Style1 = {
        transform: `translateY(${scrollY * 0.1}px)`,
        transition: 'transform 1s ease-out',
    };
    const Style2 = {
        transform: `translateY(${scrollY * -0.1}px)`,
        transition: 'transform 1s ease-out',
    };
    const Style3 = {
        transform: `translateY(${scrollY * 0.1}px)`,
        transition: 'transform 1s ease-out',
    };
    const Style4 = {
        transform: `translateY(${scrollY * -0.1}px)`,
        transition: 'transform 1s ease-out',
    };
  return (
    <>
        <ScrollTrigger onEnter={()=> setCounterState(true)} onExit={()=> setCounterState(false)}>
            <div className='container'>
        <div className='row align-items-center justify-content-lg-between'>
        <div className='col1 col-lg-4 col-12'>
            <h2 class="title text-white">
            <span class="d-lg-block">Join in on</span> something big
            </h2>
        </div>
        <div className='col1 col-lg-2 col-md-4 col-sm-4'>
        <div class="item text-center">
            <h3 class="value text-white">
                <span class="value-text">
                    {
                        counterState &&
                        <CountUp start={1} end={50}  duration={2.75}/>
                    }
                </span>M
            </h3>
            <h4 class="counter-title text-white mb-0">Learners</h4>
        </div>
        </div>
        <div className='col1 col-lg-2 col-md-4 col-sm-4'>
        <div class="item text-center">
            <h3 class="value text-white">
                <span class="value-text">
                    {
                        counterState &&
                        <CountUp start={1} end={190}  duration={2.75}/>
                    }
                </span>+
            </h3>
            <h4 class="counter-title text-white mb-0">Countries</h4>
        </div>
        </div>
        <div className='col1 col-lg-2 col-md-4 col-sm-4'>
        <div class="item text-center">
            <h3 class="value text-white">
                <span class="value-text">
                    { 
                     counterState &&
                    <CountUp start={0.01} end={3.5}  duration={1}/>
                    }
                </span>B
            </h3>
            <h4 class="counter-title text-white mb-0">Code Submits</h4>
        </div>
        </div>
        </div>
            </div>
        </ScrollTrigger>
        <ScrollTrigger onEnter={()=> setScrollY(800)} onExit={()=> setScrollY(0)}>
            <div className='counter-item counter-item1' style={Style1}>
                <img src={shape3}/>
            </div>
            <div className='counter-item counter-item2' style={Style2}>
                <img src={lineshape3}/>
            </div>
            <div className='counter-item counter-item3' style={Style3}>
               <img src={dotshape4}/>
            </div>
            <div className='counter-item counter-item4' style={Style4}>
                <img src={shape4}/>
            </div>
        </ScrollTrigger>
    </>
  )
}

export default Counter
