import React from 'react'

export default function VariationItem({item}) {
    const { images, price, weight_in_grams } = item;
    
  return (
      <div className="varaiation-items">
          <div className="var-img">
              <div className="offer-tag">
                  <small>{price.offer_applied.product_description}</small>
              </div>
              <img src={
                  "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_128,w_128/" + images[0]
              } alt="" />
          </div>

          <div>
              <div className="price-sec">
                  <p className="price-details">₹ {price?.offer_price}</p>
                  <p className="orginal-price">₹ {price.mrp}</p>

              </div>
              <div className="each-gram-price">
                  <p>{weight_in_grams}gm</p>
              </div>
          </div>

          <button className="add-action-item">Add</button>

      </div>
  )
}
