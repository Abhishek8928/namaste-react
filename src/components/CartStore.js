import { useSelector} from "react-redux";
import EmptyCart from "./EmptyCart"
import CartItem from "./CartItem";
import {
	reduceItemQuantity,
	addItem,
	increaseItemQuantity,
} from "../Utils/cartSlice";
export default function CartStore() {
	
	
	
	
	
	const cartItem = useSelector((store) => store.cart.items);
	
	
	if(!cartItem.length){
		return <EmptyCart/>
	}
	const totalAmount = cartItem.reduce((accumulator, currentValue) => {
		const amount = currentValue.data.price ?? currentValue.data.defaultPrice;
		const itemTotal = (amount / 100) * currentValue.quantity;
		return accumulator + itemTotal;
	}, 0); 

	console.log('Total Amount:', totalAmount);

	
	console.log("total amount ",totalAmount)
	return (
		<>
			
			<div className="cart">
				<div className="cart-container">
					{
                        cartItem.map(item => <CartItem item={item.data} quantity={item.quantity} />)
                    }
					
					<h3>Total Price : {totalAmount}</h3>
				</div>
			</div>
		</>
	);
}
