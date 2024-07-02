import React from 'react'
import { useEffect, useState } from "react";
import RestaurantCard from "./Card";
import CardSkeleton from "./Shimmer/Card";
import Chips from "./Shimmer/Chips"
import { Link } from 'react-router-dom';
export default function Offers() {
    const [restaurantOffers, setRestaurantOffers] = useState([]);
    const [filterMenu, setFilterMenu] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/api/seo/getListing?lat=12.9352403&lng=77.624532"
        );
        const json = await data.json();
        console.log(json);
        setRestaurantOffers(
            json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        setFilterMenu(json?.data?.success?.cards[0]?.card.card?.facetList);
    };
    
    
    return !restaurantOffers.length ? (
        <div className="shimmer-container">
            <Chips />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    ) : (
        <div className="offer-container">
            <h3 className="path">
                Home <span>/ Offers</span>{" "}
            </h3>
            <h1 className="page-title">Restaurants With Great Offers Near Me</h1>

            <div className="filter-container">
                {filterMenu.map((item) => {
                    return item.facetInfo
                        .slice(0, 2)
                        .map((item,index) => <div key={index}  className="chips">{item.label}</div>);
                })}
            </div>
            <div className="restaurant-card">
                {restaurantOffers.map((restaurant) => (
                    <Link key={restaurant?.info?.id} to={"http://localhost:1234/restaurant/" + restaurant?.info?.id}>
                    
                        <RestaurantCard
                            key={restaurant?.info?.id}
                            resData={restaurant}
                        />
                    </Link>
                ))}
            </div>

        </div>
    )
}
