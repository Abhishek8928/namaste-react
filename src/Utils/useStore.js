import { useEffect, useState } from "react";

export default function useStore() {
	const [storeItem, setStoreItem] = useState(null);

	async function fetchItem() {
		const data = await fetch(
			"https://www.swiggy.com/api/instamart/home?clientId=20240615183347"
		);

		const json = await data.json();
		setStoreItem(json.data);
	}
	useEffect(() => {
		fetchItem();
	},[]);

	return storeItem;
}
