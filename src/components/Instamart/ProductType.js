
import { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import Variation from "./Variation";
import Product from "./Product";
import useSubCategory from "../../Utils/useSubCategory";

export default function ProductType() {
	
	const [subCategory, setSubCategory] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [filterId, setFilterId] = useState("");
	const [productItems, setProductItems] = useState([]);
	const [productData, setProductData] = useState([]);
	const [variationShowcase, setVariationShowcase] = useState("");
	
	function updateVariationHandle(item){
		
		console.log(item)
		setVariationShowcase(item)
	}
	function updateCategoryState(json) {
		setSubCategory(json?.data?.filters);
		setSelectedCategory(json?.data?.selectedCategoryName);
		setFilterId(json?.data?.filters[0]?.id);
	}
	
	// fetching the data from api -> updating the state
	useSubCategory(updateCategoryState)

	function updateFilterId(id) {
		setFilterId(id);
	}
	useEffect(() => {
		if (filterId) {
			fetchData2();
		}
	}, [filterId]); // it also render
	async function fetchData2() {
		const response = await fetch(
			`https://www.swiggy.com/api/instamart/category-listing/filter?filterId=${filterId}&storeId=1380959&offset=0&type=All%20Listing&pageNo=0&limit=20&filterName=${selectedCategory}`
		);

		const json = await response.json();
		setProductData(json.data);
		setProductItems(json.data.widgets[1].data);
	}

	function updateVariation() {
		setVariationShowcase("");
	}

	if (!productItems.length) {
		return <h1>loadings</h1>;
	}
	
	console.log("from showcase" , variationShowcase)
	return (
		<>
			{variationShowcase &&
				<Variation item={variationShowcase} updateHandler={updateVariation} />}

			<div className="store-container bg-grey">
				<CategoryList
					subCategory={subCategory}
					updateFilterId={updateFilterId}
					update={setFilterId}
					selectedCategory={selectedCategory}
					filterId={filterId}
				/>

				<Product productItems={productItems} updateHandler = {updateVariationHandle} productData={productData} />
			</div>
		</>
	);
}
