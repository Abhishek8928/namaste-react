
import {Link} from 'react-router-dom'
export default function CategoryList({ subCategory, selectedCategory, updateFilterId,filterId }) {
   
   
  return (
   
          <div className="left-container-item">

              {/* menulist */}

              <div className="sub-menu">
                  {
                      subCategory.map(item => {
                          const { name, imageId,id } = item;
                          return <>
                              <Link className={`wrapper-list`} key={id} to={"/instamart/" + selectedCategory + "?filterId="+ id }>
                              <div className={filterId === id ? "active" : ""}></div>
                                  <div onClick={
                                      function () {
                                          
                                          updateFilterId(id)
                                      }
                                  } className="menu-card">
                                      
                                      <div className="menu-card-item">

                                          <div className="img-container">
                                             {
                                                 filterId === id ? (
                                                      <div className="bg-highlight"></div>
                                                 ) : ""
                                             }
                                              <img src={
                                                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96/" + imageId
                                              } alt="" />
                                          </div>
                                          <h2>{name}</h2>
                                      </div>
                                  </div>
                              
                              
                              
                              </Link>

                          </>
                      })
                  }




              </div>
          </div>
    
  )
}
