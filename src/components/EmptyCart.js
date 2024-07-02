

import React from 'react'
import {Link} from 'react-router-dom'

export default function emptyCart() {
  return (
    <div className="empty-cart-container">
          <div className="empty-cart-img">
          
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" />
          </div>
          
          <div className="content">
              <h2>Your cart is empty</h2>
              <p>You can go to home page to view more restaurants</p>
              <Link className="checkout-restaurant" to="/"  >See restaurants near you</Link>
          
          </div>
    </div>
  )
}

