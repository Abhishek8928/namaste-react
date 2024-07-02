import ProductList from "./ProductList";
import { Link } from "react-router-dom";
export default function Product({ productItems, productData, updateHandler }) {
	console.log(updateHandler);
	const { widgetInfo } = productData?.widgets[0];
	return (
		<div className="right-container-item">
			<div className="total-item">
				{widgetInfo.title.replace("<b>", "").replace("</b>", "")}
			</div>
			<div className="cayegory-item-container">
				{productItems.map((item) => (
					<Link
						className="category-item-card"
						to={"http://localhost:1234/instamart/item/" + item.product_id}
					>
						<ProductList
							updateHandler={updateHandler}
							key={item?.product_id}
							item={item}
						/>
					</Link>
				))}
			</div>
		</div>
	);
}
