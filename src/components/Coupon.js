

import React from 'react'

export default function Coupon({offer}) {
    const { descriptionTextColor, couponCode , header , offerLogo } = offer.info;
    
  return (
      <div className="coupon-offers">
          <img
              src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/" + offerLogo}
              alt=""
          />

          <div>
              <h1 className="coupon-offer">{header}</h1>
              <p className="coupon-code">{couponCode }</p>
          </div>
      </div>
  )
}
