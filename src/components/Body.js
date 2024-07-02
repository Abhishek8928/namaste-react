import Carousel from "./Carousel";
import RestaurantCard from "./Card";
import { useState, useEffect,useContext } from "react";
import CardSkeleton from "./Shimmer/Card";
import CarouselSkeleton from "./Shimmer/Carousel";
import TagWrapper from "./tag/TagWrapper";
import Search from "./Search";
import NoRestaurant from "./NoRestaurant";
import {Link} from "react-router-dom"
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
	const [data, setData] = useState([]); // complete api data
	const [restaurant, setRestaurant] = useState([]); // cards 
	const [filterRestaurnts, setFilterRestaurnts] = useState([]); // cards
	const [topRestaurant, setTopRestaurant] = useState([]);
	const [carouselList, setCarouselList] = useState([]);
	const [searchTxt, setSearchTxt] = useState("");
	
	
	function extractCollectionId(entityId) {
		const regex = /collection_id=(\d+)/;

		const match = entityId.match(regex);

		if (match) {
			
			return match[1];
		} else {
			
			return entityId;
		}
	}


	function getTopRatedRestaurant(restaurantList) {
		return restaurantList.filter((item) => item.info.avgRating > 4.3);
	}

	useEffect(() => {
		fetchDataRes();
		
	}, []);
	

	const fetchDataRes = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const restaurantList = await data.json();
		
		const { cards } = restaurantList?.data;
		setData(cards);
		setTopRestaurant(
			cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setCarouselList(cards[0]?.card?.card?.imageGridCards?.info);
		setRestaurant(
			cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setFilterRestaurnts(
			cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};
	
	const status = useOnlineStatus();
	
	if(!status){
		return (
			<>
				<div className="offline-container">
				
					<h1 className="offline-title">Connection Error</h1>
					<p className="offline-desc">Please check your internet connection and try again.</p>
				    <Link className="reload-btn" to="/">RELOAD</Link>
				</div>
			
			
			</>
		)
	}
	

	return restaurant?.length === 0 ? (
		<div className="shimmer-container">
			<CarouselSkeleton />
			<CardSkeleton />
			<CardSkeleton />
		</div>
	) : (
		<>
			<div className="restaurants">
				<section>
					<h1 className="tag-line">What's on your mind?</h1>
					<div className="carousel-container">
						<div className="carousel">
								{
									carouselList && carouselList.map((item) => (
									

										<Link to={"/collection/" + extractCollectionId(item.entityId)} key={item.id}>
											<Carousel carData={item} />
										</Link>
								))}
						</div>
					</div>
					

					<h1 className="tag-line">Top restaurant chains in Mumbai</h1>
					<div className="top-restaurant-card top-res">
						{ topRestaurant &&  topRestaurant.map((restaurant) => (
							<Link key={restaurant?.info?.id} to={ "/restaurant/" + restaurant?.info?.id } >
								<RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
							
							
							</Link>
						))}
					</div>
				</section>
				<section>
					<h1 className="tag-line">
						Restaurants with online food delivery in Mumbai
					</h1>
					<div className="filter-container">
						<div className="filter">
							<button
								onClick={() => {
									setRestaurant(getTopRatedRestaurant(restaurant));
								}}
							>
								Top Rated Resturant
							</button>
							<button>Fast Delivery</button>
							<button>New on Swiggy</button>
							<button>Pure Veg</button>
							<button>Offers</button>
							<button>Less than Rs. 300</button>
						</div>

						<Search
							state={[searchTxt, setSearchTxt]}
							restaurantState={[restaurant, setRestaurant]}
							filterState={[filterRestaurnts, setFilterRestaurnts]}
						/>
					</div>
					{!filterRestaurnts.length ? (
						<NoRestaurant />
					) : (
						<div className="restaurant-card">
							{filterRestaurnts.map((restaurant) => (
								<Link key={restaurant?.info?.id} to={"restaurant/"  + restaurant?.info?.id}>
									<RestaurantCard
										key={restaurant?.info?.id}
										resData={restaurant}
									/>
								
								</Link>
							))}
						</div>
					)}
				</section>

				<section>
					<TagWrapper Listing={data} />
				</section>
			</div>
		</>
	);
};

export default Body;
