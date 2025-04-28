import React, { useState } from 'react'

const ContactCard = ({icon , title , listItem1 , listItem2 , item1, item2}) => {

  return (
    <>
    <div className='card-box' >
      <div className='card-items'>
        <div className='item-icon'>
          <img src={icon}/>
        </div>
        <div className='item-content'>
          <h3 className='item-title'>{title}</h3>
          <ul className='item-list'>
            <li>{item1}
            <a href="#!">{listItem1}</a>
            </li>
            <li>{item2}
            <a href="#!">{listItem2}</a>
            </li>
          </ul>
        </div>
      </div>

    </div>
      
    </>
  )
}

export default ContactCard