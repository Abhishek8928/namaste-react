import { SWIGGY_CAROUSEL_URL } from "../Utils/constant";

const Carousel = ({ carData }) => {
	const { imageId } = carData;
	return (
		<>
			<div className="carousel-card">
				<img src={SWIGGY_CAROUSEL_URL + imageId} alt="" />
			</div>
		</>
	);
};

export default Carousel;
