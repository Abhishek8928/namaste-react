import React from 'react'

export default function ProductList({ item,updateHandler }) {
    
    const { display_name, product_id, brand } = item;
    const { sku_quantity_with_combo, price } =
        item.variations[item.variations.length - 1];
        
    
    return (
    
        <div key={product_id} >
            <div className="item-img">
                <img
                    src={
                        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/" +
                        item.variations[0].images[0]
                    }
                    alt=""
                />
            </div>

            <div className="category-content">
                <small className="brand-name">{brand}</small>
                <h2 className="brand-title">{display_name}</h2>

                <small className="quantity">{sku_quantity_with_combo}</small>

                <div className="price-option-container">
                    <div>
                        <p className="orginal-price">₹ {price.mrp}</p>
                        <p className="price-details">₹ {price.offer_price}</p>
                    </div>


                    <button
                        onClick={() => {
                            
                            
                            item.variations.length != 1 ? updateHandler(item) : ""
                        }}
                        className="add-action-item"
                    >
                        {item.variations.length === 1 ? (
                            "ADD"
                        ) : (
                            <>
                                {`${item.variations.length} options `}
                                <i className="bi bi-chevron-down"></i>
                            </>
                        )}
                    </button>


                </div>
            </div>
        </div>
  )
}
