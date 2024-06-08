import Carousel from "./Carousel";
import RestaurantCard from "./Card";
import { useState, useEffect } from "react";
import CardSkeleton from "./Shimmer/Card";
import CarouselSkeleton from "./Shimmer/Carousel";
import TagWrapper from "./tag/TagWrapper";
import Search from "./Search";
import NoRestaurant from "./NoRestaurant";

const Body = () => {
	const [data, setData] = useState([]);
	const [restaurant, setRestaurant] = useState([]);
	const [filterRestaurnts, setFilterRestaurnts] = useState([]);
	const [topRestaurant, setTopRestaurant] = useState([]);
	const [carouselList, setCarouselList] = useState([]);
	const [searchTxt, setSearchTxt] = useState("");

	console.log(searchTxt);
	function getTopRatedRestaurant(restaurantList) {
		return restaurantList.filter((item) => item.info.avgRating > 4.3);
	}

	useEffect(() => {
		fetchData();
		// updateRes();
	}, []);
	
	// const updateRes = async () => {
	// 	const url = "https://www.swiggy.com/dapi/restaurants/list/update";
	// 	const data = {
	// 		Lat: 19.032803,
	// 		Lng: 73.10121529999999,
			
	// 	};

	// 	try {
	// 		const response = await fetch(url, {
	// 			method: "POST",
	// 			headers: {
	// 				'Content-Type': 'application/json' // Specify the content type as JSON
	// 			},
	// 			body: JSON.stringify(data)
	// 		});

	// 		if (!response.ok) {
	// 			throw new Error('Network response was not ok');
	// 		}

	// 		const result = await response.json();
	// 		console.log(result);
	// 	} catch (error) {
	// 		console.error('Error:', error);
	// 	}
	// };

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.032803&lng=73.10121529999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const restaurantList = await data.json();
		const { cards } = restaurantList?.data;
		setData(cards);
		setTopRestaurant(
			cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setCarouselList(cards[0]?.card?.card?.imageGridCards.info);
		setRestaurant(
			cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setFilterRestaurnts(
			cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	

	return !restaurant.length ? (
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
							{carouselList.map((item) => (
								<Carousel key={item.id} carData={item} />
							))}
						</div>
					</div>
					<section></section>

					<h1 className="tag-line">Top restaurant chains in Mumbai</h1>
					<div className="top-restaurant-card top-res">
						{topRestaurant.map((restaurant) => (
							<RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
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
								<RestaurantCard
									key={restaurant?.info?.id}
									resData={restaurant}
								/>
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
