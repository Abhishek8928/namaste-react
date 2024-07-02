

import React from 'react';
import useProductItem from '../../Utils/useProductItem';
export default function ProductShowecase() {
    
  const item = useProductItem()
  
  
  if (!item || !item.variations){
    return <h1>Loading...</h1>
    }
  
  
  
  const index = item.variations.length-1
  
  const { brand, images, price, display_name, inventory
, quantity, category, meta


  } = item.variations[index]
  
  const { long_description, disclaimer
 } = meta;


  console.log(item.variations[index])
    
  return (
    <div className="store-container grey-col">
      <div className="product-name-container">
        <svg onClick={
          ()=>{
            window.history.back();
          }
        } xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill=" rgba(2, 6, 12, 0.75)" clasName="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
        </svg>
        <h1 className="selected-product-name">Selected {display_name}</h1>
      </div>
      
      <div className="item-container">
      
      <div className="item-img-wrapper">
          <img className={inventory.in_stock ? "none"  : "opacity"} src={
            "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" + images[0]
          }  alt="" />
          
          <div className="offer-tag --own">
          
            <small>12% off</small>
          </div>
      </div>
      
      <div className="name">
      <h3 className="item-brand-name">Ashiravss</h3>
          <h3 className="item-name">Selected {display_name}</h3>
      
      </div>
        <div className="meta">
        
          <div>
          
            <div className="item-quantity">{quantity}</div>
            <div className="price-sec">
              <p className="price-details">₹ {price?.offer_price}</p>
              <p className="orginal-price">₹ {price.mrp}</p>

            </div>
          
          </div>
          <button className="add-action-item">{!inventory.in_stock ?  "sold Out" : "Add"}</button>
        </div>
        
        
        
      
      
      </div>
      
      <div className="item-long-description">
        <h1>Description</h1>
        <p>{long_description.replace("Short Description:","")}</p>
      </div>
      <div className="item-long-description">
        <h1>Important Information</h1>
        <p>{disclaimer}</p>
      </div>
      
      
      
      <div className="swiggy-img">
      
      
      <div className="left">
      
          <h1>For better experience,download <br /> the Swiggy app now</h1>
      </div>
        <div className="right">
        
          <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/Dweb/half%20mockup%201.png" alt="" />
        
        </div>
      
      </div>
  
    </div>
  )
}
