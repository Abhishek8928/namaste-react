import { useDispatch } from "react-redux";
import {
	reduceItemQuantity,
	addItem,
	increaseItemQuantity,
} from "../Utils/cartSlice";

export default function CartItem({ item, quantity }) {
	const { imageId, isVeg, name, price, defaultPrice } = item;

	const dispatchReducerHandler = useDispatch();

	function removeItemHandler(item) {
		dispatchReducerHandler(reduceItemQuantity(item));
	}

	function addQuantityHandler(item) {
		dispatchReducerHandler(increaseItemQuantity(item));
	}

	return (
		<>
			<div className="cart-item">
				<div className="left">
					<img
						src={
							"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
							imageId
						}
						alt=""
					/>
				</div>
				<div className="dish-left right">
					<div className="wrapper">
						{isVeg ? (
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnkA80c8xYJT2yvfdMQnRyfKfWsKHh705RJw&usqp=CAU"
								alt=""
							/>
						) : (
							<img
								src="https://cdn.vectorstock.com/i/500p/00/43/non-vegetarian-sign-veg-logo-symbol-vector-50890043.jpg"
								alt=""
							/>
						)}
						<h2 className="cart-item-name">{name}</h2>

						<div className="qunatity-wrapper">
							<button
								onClick={() => {
									removeItemHandler(item);
								}}
							>
								<i class="bi bi-dash-lg"></i>
							</button>
							<small>{quantity}</small>
							<button
								onClick={() => {
									addQuantityHandler(item);
								}}
							>
								<i className="bi bi-plus-lg"></i>
							</button>
						</div>
					</div>

					<p className="total-price">₹ {price ? (price/100 * quantity) : (defaultPrice/100 * quantity)}</p>
				</div>
			</div>
		</>
	);
}
