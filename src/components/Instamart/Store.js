import useStore from "../../Utils/useStore";
import { Link } from "react-router-dom";
import Product from "./Category";
import { Link } from "react-router-dom";
export default function Store() {
	const data = useStore();

	if (!data) {
		return <h1>Loading</h1>;
	}

    const { slaString, storeDetails, widgets } = data;
	
	return (
		<>
			<div className="store-container">
				<img
                    src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_3072/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/6/13/c7fe3a93-69d9-4289-ab3b-91fc8cef8525_Top2.png"
					alt=""
				/>

				<div className="store-details">
					
                    
                    
                    <div className="top-container">
                    
                        <div className="left-details">
                            {slaString && (
                                <div className="max-time">
                                    <span>{slaString.slice(0, 2)}</span>{" "}
                                    {slaString.slice(2, slaString.length)}
                                </div>
                            )}
                            <div>
                                <h1 className="title">
                                    Delivery to <span>Other</span>
                                </h1>
                                <p className="address-line"> panvel, navi mumbai, maharashtra 410218, india</p>


                            </div>
                        </div>

                        <div className="right-details">
                            <svg className="_1Eaan _116Jv" width="36" height="36" viewBox="0 0 32 32" fill="white" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="url(#paint0_linear_543_6340)"></circle><path fillRule="evenodd" clipRule="evenodd" d="M16.5017 13.32C18.5852 13.32 20.273 11.6766 20.273 9.64944C20.273 7.62338 18.5852 5.97998 16.5017 5.97998C14.4195 5.97998 12.7305 7.62338 12.7305 9.64944C12.7305 11.6766 14.4195 13.32 16.5017 13.32ZM8.65743 20.3424C10.06 17.5014 13.0452 15.5393 16.5001 15.5393C19.9568 15.5393 22.9411 17.5013 24.3431 20.3423C24.9581 21.5885 25.2656 22.2116 24.7097 23.1058C24.1538 24 23.2382 24 21.4069 24H11.5932C9.76204 24 8.84646 24 8.2906 23.1057C7.73475 22.2114 8.04231 21.5884 8.65743 20.3424Z" fill="white"></path><defs><linearGradient id="paint0_linear_543_6340" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#36393E" stopOpacity="0.8"></stop><stop offset="1" stopColor="#36393E"></stop></linearGradient></defs></svg>

                        </div>
                    
                    
                    </div>
                    
                    
                    
                    <div className="search-bar">
                    
                    <Link >
                            Search for "Namkeen"
                    </Link>
                    
                        <i className="bi bi-search"></i>
                    
                    </div>
                    
                    
                    
                    
                    
                    
                    
				</div>
                
                <div className="product-container">
                <div className="title-wrapper">
                
                        <h1 className="catg-title">{widgets[1].widgetInfo.title}</h1>
            
                    <div className="line"></div>
                </div>
                
                
                <div className="product-list-wrapper">
                
                {
                            widgets[1].data.map(item => (
                                <Link to={item.displayName} key={item.nodeId} ><Product  item={item} /></Link>
                            ))
                }
                
                
                </div>

                </div>
			</div>
		</>
	);
}
