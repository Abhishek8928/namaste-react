import { useState, useEffect } from "react";
import { RES_MENU } from "./constant";

export default useRestaurantMenu = (resId, state) => {
	const [RestaurantData, RestaurantMenuList] = state;

	useEffect(() => {
		fetchMenu();
		
	}, []);

	async function fetchMenu() {
		const result = await fetch(RES_MENU + resId);
		const json = await result.json();
		RestaurantData(json.data.cards);
		RestaurantMenuList(
			json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []
		);
		
	}
};
