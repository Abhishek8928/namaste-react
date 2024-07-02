import { useDispatch } from "react-redux";
import {
	reduceItemQuantity,
	addItem,
	increaseItemQuantity, } from "../Utils/cartSlice";
import { useSelector } from "react-redux";
export default function DishItem({ data }) {
	const {
		imageId,
		isVeg,
		name,
		nextAvailableAtMessage,
		price,
		ratings,
		description,
		defaultPrice,
	} = data;
	const { ratingCountV2, rating } = ratings.aggregatedRating;

	const dispatchAction = useDispatch();

	const cartItem = useSelector((store) => store.cart.items);

	function addItemHandler(item) {
		const newItem = {
			data: item,
			quantity: 1,
		};
		dispatchAction(addItem(newItem));
	}
	function removeItemHandler(item) {
		dispatchAction(reduceItemQuantity(item));
	}

	function addQuantityHandler(item) {
		dispatchAction(increaseItemQuantity(item));
	}
	function isItemInCart() {
		const itemAvail = cartItem.filter((item) => item.data.id === data.id);
		return itemAvail;
	}
	const cart = isItemInCart();
	return (
		<div className="menu-list">
			<div className="dish-left">
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

				<h2 className="dish-name">{name}</h2>
				<p className="dish-price">
					₹ {price ? price / 100 : defaultPrice / 100}
				</p>

				{ratings && (
					<div className="dish-rating">
						<svg
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							fillcolor="#116649"
						>
							<rect width="14" height="14" fill="white"></rect>
							<path
								d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z"
								fill="#116649"
							></path>
						</svg>

						<small className="dish-total-rating">
							{rating}
							<span>{`(${ratingCountV2})`}</span>
						</small>
					</div>
				)}

				<p className="dish-description">{description && description}</p>
			</div>
			<div className="dish-right">
				{imageId && (
					<img
						className={nextAvailableAtMessage ? "filter" : ""}
						src={
							"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
							imageId
						}
						alt=""
					/>
				)}

				{
					// nextAvailableAtMessage ? <button className="add-action-msg">{nextAvailableAtMessage }</button> :
				}
				{!cart.length ? (
					<button
						onClick={() => {
							addItemHandler(data);
						}}
						className="add-action"
					>
						Add
					</button>
				) : (
					cart.map((x) =>
						x.data.id === data.id ? (
							<>
								<div className="btn-action-wrapper">
								
									<button
										onClick={() => {
											removeItemHandler(data);
										}}
									>
										<i class="bi bi-dash-lg"></i>
									</button>
									<small>{x.quantity}</small>
									<button
										onClick={() => {
											addQuantityHandler(data);
										}}
									>
										<i className="bi bi-plus-lg"></i>
									</button>
								</div>
							</>
						) : null
					)
				)}
			</div>
		</div>
	);
}
