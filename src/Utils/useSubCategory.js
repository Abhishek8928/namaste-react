


import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


export default function useSubCategory(Handler){
    const { productType } = useParams();

    useEffect(() => {
        fetchSubCategory();
    }, []);

    async function fetchSubCategory() {
        const data = await fetch(
            "https://www.swiggy.com/api/instamart/category-listing?categoryName=" +
            productType +
            "&storeId=1380959&offset=0&filterName=&taxonomyType=All%20Listing"
        );
        const json = await data.json();
        Handler(json);
    }
}

