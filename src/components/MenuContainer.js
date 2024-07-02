import React from "react";
import {useState} from "react"
import Menu from "./Menu";
export default function MenuContainer({ menuList }) {
	const [itemIndex , setItemIndex] = useState(0)
	return (
		<>
			{menuList.map((item, index) => {
				return <Menu showItem={index === itemIndex && true} key={item.card.card.title} handler={() => { itemIndex === index ? setItemIndex(null) : setItemIndex(index) }} MenuList={item} />;
			})}
		</>
	);
}
