import React, { useContext, useEffect, useState } from 'react'
import Banner from '../../components/banner/Banner'
import { Link, useParams } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { CartContext } from '../../hooks/CartContext';
import { getCart, removeFromCart } from '../../api/cart';


const Cart = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    const { id } = useParams();
    // cart counter context
  let { setCounter, cartItems, setCartItems } = useContext(CartContext);

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
    <Banner className={"banner page-banner"} background={" linear-gradient(0deg, transparent, #fff0e5, #fff0e5)"}>
    <h1 className='banner-header'> Your Cart </h1>
    <ul className='banner-list'>
        <li ><a href='/'> Home</a></li>
        <li >Cart</li>
    </ul>
    </Banner>
    <main>
      <div className='main-cart'>
        <div className='container'>
        
          {
            cartItems.length > 0 &&(
          <div className='row'>
            <div className='col-12'>
              <div className='table-content'>
                <table className='table'>
                  <thead >
                    <th className=''>Course</th>
                    <th className=''>Price</th>
                    <th className=''>Remove</th>

                  </thead>
                  <tbody>
          {
            cartItems.length >= 1 &&(
              cartItems.map((item)=>(
                <tr>
                      <td className='course'>
                        <Link to={`/courseDetails/${id}`}>{item.title}</Link>
                      </td>
                      <td className='price'>
                        <span>${item.price}</span>
                      </td>
                      <td className='remove ' onClick={()=>{handleRemove(item.id)}}>
                        <IoMdClose className='icon'/>
                      </td>
                    </tr>
                    
                  ))
                ) 
                
              }
                  </tbody>
                </table>
                <div className='row '>
                  <div className='col-md-5 ms-auto '>
                    <div className='cart-totals'>
                    <div className='cart-total'>
                      <h4> Cart total:</h4>
                      <span>${subtotal}</span>
                    </div>
                    <button className='btn' >
                      <span>
                        <small>Checkout</small>
                        <small>Checkout</small>
                      </span>

                    </button>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

            )
          }
            {
            cartItems.length == 0 &&(
              <div className='empty text-center'>
                <h3>Your Cart Is Empty</h3>
              </div>

            )
          }

        </div>
      </div>
    </main>
      
    </>
  )
}

export default Cart
{/* <div class="cart-page-total"><h2>Cart totals</h2><ul class="mb-20"><li>Subtotal <span>$191.00</span></li><li>Total <span>$191.00</span></li></ul><a class="edu-border-btn" href="/checkout">Proceed to checkout</a></div> */}