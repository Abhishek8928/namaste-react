


export default function Product({item}){
    const { displayName, imageId , id
 } = item;
    return (
        <>
        
            <div key={id} className="product-card">
                
                <img src={
                    " https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/" + imageId
                } alt="" />


                <h2 className="product-item-name">{displayName}</h2>


            </div>
        
        
        </>
    )
}