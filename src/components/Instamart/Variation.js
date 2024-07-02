

import React from 'react'
import VariationItem from './VariationItem';
export default function Variation({ item, updateHandler }) {
    const { display_name, variations } = item;
    console.log(variations)
  return (
      <>
      
      
          <div onClick={
              () => { updateHandler() }
          } className="overlay">

          </div>
          <div className="varaiation-showcase">
              <h2 className="vari-title">{display_name}</h2>

              {

                  variations.map(item => <VariationItem key={item.product_id} item={item} />)
              }

          </div>
      
      </>
  )
}
