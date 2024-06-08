

import TagCard from "./TagCard"

export default function TagWrapper({Listing}) {
  return (
    <div className="tagcard">
          <h1 className="tagcard-heading">Best Places to Eat Across Cities</h1>
          
          <div className="tagcard-container">
          
          {
          Listing[10]?.card?.card?.cities?.slice(0,12).map((item,index) => <TagCard city={item} key={index} />)
          } 
          </div>
    </div>
  )
}
