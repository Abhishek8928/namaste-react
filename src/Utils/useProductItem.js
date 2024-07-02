




import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function useProductItem(){
    const [product, setProduct] = useState({});
    const { productId} = useParams();
    useEffect(()=>{
        fetchProductItem();
    },[])
    
    async function fetchProductItem(){
        const data = await fetch(`https://www.swiggy.com/api/instamart/item/${productId}/widgets?storeId=1388384`);
        
        
        const json = await data.json();
        
            
            setProduct(json?.data?.item)
        
        
        
    }
    
    return product;
}