export default function MenuCarousel({ item }) {
	const { imageId, price, defaultPrice } = item?.dish?.info;
	const { creativeId } = item;
	return (
		<>
			<div className="each-carousel">
				<img
					src={
						"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" +
						creativeId
					}
					alt=""
				/>
				<div className="overlay-dark"></div>
				<div className="each-carousel-footer">
					<p className="price">₹{defaultPrice / 100 || price / 100}</p>
					<button>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							className="bi bi-plus-lg"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
							/>
						</svg>
					</button>
				</div>
			</div>
		</>
	);
}
