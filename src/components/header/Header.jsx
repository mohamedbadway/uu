import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaArrowRightLong, FaCartPlus } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import { PiShoppingCart } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { IsMobileContext } from '../../utilies/isMobile';
import { CartContext } from '../../hooks/CartContext';
import { IoMdClose } from "react-icons/io";
import { getCart, removeFromCart } from '../../api/cart';
import logo from "../../assets/images/site_logo.png";



const Header = () => {
  const { isMobile } = useContext(IsMobileContext);
  const [activeMenu , setActiveMenu] = useState(false);
  const [stickyHeader , setStickyHeader] = useState(false);
  const [popCart , setPopCart] =useState(false);
  
  
  const sticky =()=>{
    if (window.scrollY >= 60){
      
      setStickyHeader(true);
    }
    else{
      setStickyHeader(false);

    }
  }
  useEffect(() => {
    window.addEventListener('scroll', sticky);
    return () => {
      window.removeEventListener('scroll', sticky);
    };
  }, []);
  // cart counter context
  let {counter, setCounter, cartItems, setCartItems } = useContext(CartContext);

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  useEffect(() => {
    getCart().then((result) => setCartItems(result));
  }, []);
  const handleRemove = async (id) => {
    await removeFromCart(id);
    const updatedCart = await getCart();
    setCartItems(updatedCart);
    setCounter(updatedCart.length);
  }
  return (
    <>
      <header className={ `${stickyHeader ?"header sticky" : "header"} `}>
        <div className='top-header'>
            <p className='m-0 '>Learn more with exclusive courses, quizzes, and extra practice content</p>
            <Link to="/about" className='header-btn ' >
            <span  >
                <small>Learn more</small>
                <small>Learn more</small>
            </span>
            <FaArrowRightLong className='right-arrow ms-2'/>
            </Link>
        </div>
        <div className=/*{ `${stickyHeader ?"bottom-header sticky" : "bottom-header"} `}*/  "bottom-header">
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col1 col-lg-3 col-5 '>
                <div className='site-logo'>
                  <Link href='#' className='site-link'>
                  <img src={logo}/>
                  </Link>
                </div>
              </div>
              <div className='col1 col-lg-6 col-2 '>
                {!isMobile && (
                  <div className='nav-menu '>
                    <ul className='nav-menu-list'>
                      <NavLink to="" className={"nav-list-item"} >home</NavLink>
                      <NavLink to={"/about"} className={"nav-list-item"} >about</NavLink>
                      <NavLink to={"/courses"} className={"nav-list-item"} >courses</NavLink>
                      <NavLink to={"/blog"} className={"nav-list-item"} >blog</NavLink>
                      <NavLink to={"/contact"} className={"nav-list-item"} >contact</NavLink>
                    </ul>
                </div>
                )}
                {isMobile && (
                  <div className={`nav-menu-mobile ${activeMenu ? "active" : ""}`}>
                    <ul className='nav-menu-list' onClick={()=>{setActiveMenu(false)}}>
                      <NavLink to="" className={"nav-list-item"} >home</NavLink>
                      <NavLink to={"/about"} className={"nav-list-item"} >about</NavLink>
                      <NavLink to={"/courses"} className={"nav-list-item"} >courses</NavLink>
                      <NavLink to={"/blog"} className={"nav-list-item"} >blog</NavLink>
                      <NavLink to={"/contact"} className={"nav-list-item"} >contact</NavLink>
                    </ul>
                </div>
                )}
              </div>
              <div className='col1 col-lg-3 col-5 '>
                <ul className='header-icons'>
                  <li className='mobile-menu'>
                  <LuMenu className='menu-icon header-icon' onClick={()=>setActiveMenu(!activeMenu)}/>
                  </li>
                  <li className='cart'onClick={()=>{
                    setPopCart(true)
                  }} 
                 >
                  <PiShoppingCart className='cart-icon header-icon custom'/>
                  <span className='cart-counter'>{counter}</span>
                  {/* <div className='cartPopUp '>
                  <h3 class="cart_empty_text text-center mb-0">
                    <span class="d-block">No products</span> 
                    in the cart.</h3>
                  </div> */}
                  </li>
                  <li className='login custom'>
                    <Link to="/login" className='login-btn '>
                    <FiUser className=' login-icon header-icon' />
                    <span >Login</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Signup" className='sign-btn'>
                    <FiUserPlus className='sign-icon header-icon'/>
                    <span>
                    <small>Sign Up </small>
                    <small>Sign Up </small>
                    </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        { 
          popCart && (
        <div className='cart-pop'>
        <div className={`cart-wrapper animate__animated animate__bounceInRight ${popCart ? "open" : ""}`}>
          <div className='title'>
            <h4> Your Cart</h4>
          </div>
          <div className='close'>
          <IoMdClose className='icon' onClick={()=>{
            setPopCart(false)
          }}/>
        </div>
        <div className='cart'>
        <div className='inner-cart'>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div className='inner'  key={item.id}>
                <div className='cart-item'>
                  <h5>{item.title}</h5>
                  <p>Price: {item.price}$</p>
                  <button className='' onClick={()=>{handleRemove(item.id)}}><IoMdClose className='icon'/></button>
                </div>
              </div>
            ))
            
          ) 
          : (
            <p>Your cart is empty.</p>
          )}
        </div>
        {
          cartItems.length > 0 &&(
        <div className='cart-checkout'>
          <div className='checkout-title'>
            <h4> Subtotal:</h4>
            <span>${subtotal}</span>
          </div>
        </div>
          )
        }
        {
          cartItems.length > 0 &&(
        <div className='view-cart'>
          <Link to={"/cart"} className='btn' onClick={()=>{
            setPopCart(false)
          }}>
            <FaCartPlus className='icon me-1' />
            <span>
              <small>View Cart</small>
              <small>View Cart</small>
            </span>
          </Link>

        </div>

          )
        }
        </div>
        </div>
        
      </div>
          )
        }
      </header>
      
    </>
  )
}

export default Header