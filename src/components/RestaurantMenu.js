import { useState } from "react";
import Coupon from "./Coupon";
import MenuCarousel from "./MenuCarousel";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import MenuContainer from "./MenuContainer";
import UserContext from "../Utils/UserContext";
import {useContext} from 'react'
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'

export default function RestaurantMenu() {
	const [restaurantData, setRestaurantData] = useState([]);

	const [restaurantMenuList, setRestaurantMenuList] = useState([]);
	
	const cartItem = useSelector(store => store.cart.items)

	
	
	const { id } = useParams();
	const state = [setRestaurantData, setRestaurantMenuList];
	useRestaurantMenu(id,state);
	const data = useContext(UserContext);
	if (!restaurantData.length) {
		
		
		return (
			<>
				<div className="rest-menu-container">
					<h1 className="res-name-skelton"></h1>
					
					<div className="res-details-container-skeleton">
						
					</div>

					<div className="deals-container">
						

						<div className="coupon-offers-container">
							{[1,2,3,4,5].map((offerItem,index) => {
								return (
									<div key={index} className="coupon-offers-skeleton">

									</div>
								)
							})}
						
						</div>
					</div>
					
					

					<div style={{ margin: "0 1.4rem" }} className="menu-container">
						
					</div>
				</div>
			</>
		);
	}
	
	
	const {
		areaName,
		costForTwoMessage,
		totalRatingsString,
		name,
		avgRatingString,
		cuisines,
		sla,
		expectationNotifiers,
	} = restaurantData[2]?.card?.card?.info;
	const { offers } = restaurantData[3]?.card?.card?.gridElements?.infoWithStyle;
	const { carousel } = restaurantMenuList[1].card.card;
	const { itemCards } = restaurantMenuList[2].card.card;
	const menuList = restaurantMenuList.slice(2,restaurantMenuList.length-2)
	
	

	return (
		<>
			<div className="rest-menu-container">
				<h1 className="res-name-">{name}</h1>
				
				<div className="res-details-container">
					<div className="res-details">
						<div className="top">
							<div className="rating-details">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fillRule="none"
									role="img"
									aria-hidden="true"
									strokecolor="rgba(2, 6, 12, 0.92)"
									fillcolor="rgba(2, 6, 12, 0.92)"
								>
									<circle
										cx="10"
										cy="10"
										r="9"
										fillRule="url(#StoreRating20_svg__paint0_linear_32982_71567)"
									></circle>
									<path
										d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
										fill="white"
									></path>
									<defs>
										<linearGradient
											id="StoreRating20_svg__paint0_linear_32982_71567"
											x1="10"
											y1="1"
											x2="10"
											y2="19"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#21973B"></stop>
											<stop offset="1" stopColor="#128540"></stop>
										</linearGradient>
									</defs>
								</svg>

								<div className="res-rating">
									{`${avgRatingString} ( ${totalRatingsString}) `}
								</div>
								<div className="dot">•</div>

								<div className="res-rating">{costForTwoMessage}</div>
							</div>

							<div className="cuisines">{cuisines}</div>

							<p className="outlet">
								Outlet
								<span> {areaName} </span>
							</p>
							<p className="outlet">{sla.slaString}</p>
						</div>

						<div className="bottom">
							<img
								src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu"
								alt=""
							/>

							<div className="deilvery-rate-extra">
								{expectationNotifiers.length &&
									expectationNotifiers[0].enrichedText
										.replace("<b>", "")
										.replace("</b>", "")}
							</div>
						</div>
					</div>
				</div>

				<div className="deals-container">
					<h1>Deals for you</h1>

					<div className="coupon-offers-container">
						{offers.map((offerItem,index) => (
							<Coupon key={index}  offer={offerItem} />
						))}
					</div>
				</div>

				<div style={{ margin: "0 1.4rem" }} className="menu-container">
					<div className="menu-container-header">
						<div className="filter-wrapper">
							{(
								<>
									<div  className="chips">
										Veg
									</div>
									<div className="chips">
										Non Veg
									</div>
								</>
							)}
							<div className="chips">Best seller</div>
						</div>
					</div>

					{carousel && (
						<div className="menu-carousel-container">
							<h1 className="tag-line">Top Picks</h1>
							<div className="menu-inner-container">
								{carousel.map((item, index) => (
									<MenuCarousel key={index} item={item} />
								))}
							</div>
						</div>
					)}
					
					
					
					
					<div className="menulist-container">
						
						
						
						<MenuContainer menuList = {menuList}  />
						
						
					</div>
				</div>
				
				
				{cartItem.length && <div className="cart-item-length">
				
					<div className="bottom-toast">
						<span> {cartItem.length} items added</span>
						<Link to="/Cart">View Cart </Link>
					</div>
					</div>
				}
				
				
			</div>
		</>
	);
}
