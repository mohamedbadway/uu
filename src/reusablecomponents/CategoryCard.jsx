import React, { useState } from 'react'
import cardbg from "../../src/assets/images/dot_shape_3.png";

const CategoryCard = ({icon , title }) => {
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left - card.width / 2;
    const y = e.clientY - card.top - card.height / 2;
    setTransform({ x: x / 5, y: y / 5 });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
  };
  const style = {
    transform: `translate(${transform.x}px, ${transform.y}px)`,
    transition: 'transform 0.09s ease-in-out',
  };

  return (
    <div className='category-card' >
      <a href='' className='category-card-item custom' onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave} style={style} >
       <span className='card-icon'>
        <img src={icon}/>
       </span>
       <strong className='item-title'>{title}</strong>
       <small className='item-count'> 2 courses</small>

      </a>
    </div>
  )
}

export default CategoryCard

