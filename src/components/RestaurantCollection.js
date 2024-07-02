import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RestaurantCard from "./Card";
import CardSkeleton from "./Shimmer/Card";
import Chips from "./Shimmer/Chips"
import { Link } from "react-router-dom";
export default function Collection() {
	const { id } = useParams();
	const [collection, setCollection] = useState([]);

	useEffect(() => {
		fetchCollection();
	}, []);
	async function fetchCollection() {
		let data = await fetch(
			`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=${id}&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
		);
		let json = await data.json();

		setCollection(json?.data?.cards);
	}
    


	if (!collection.length) {
		return (
            <div className="shimmer-container">
                <Chips />
                <CardSkeleton />
                <CardSkeleton />
            </div>
        )
	}

	const { title, description, count } = collection[0]?.card?.card;
    const { facetList } = collection[1]?.card?.card;
    
	return (
		<>
        
            
			<div className="offer-container">
                <h2 className="collection-title">{title}</h2>
                <p className="description">{description }</p>
                {
                    facetList && <div className="filter-container">
                        {facetList.map((item) => {
                            return item.facetInfo
                                .slice(0, 2)
                                .map((item, index) => <div key={index} className="chips">{item.label}</div>);
                        })}
                    </div>
                }
                <h2 style={{padding:"1.4rem 0"}} className="tag-line ">{count} to explore</h2>
                
                <div className="restaurant-card">
                    {collection.slice(3).map((restaurant) => (
                        
                        <Link key={restaurant?.card.card.info?.id} to={"http://localhost:1234/restaurant/" + restaurant?.card.card.info?.id}>
                        
                            < RestaurantCard
                                
                                resData={restaurant.card.card}
                            />
                        </Link>
                    ))}
                </div>
			</div>
		</>
	);
}
