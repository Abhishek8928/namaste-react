import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
const cart = createSlice({
	name: "cart",
	initialState: {
		items: [], // we have to think it is immutable
	},
	reducers: {
		addItem: (state, action) => {
			const itemExists = state.items.some(
				(item) => item.data.name === action.payload.data.name
			);

			if (itemExists) {
				state.items = state.items.map((item) =>
					item.data.name === action.payload.data.name
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			} else {
				state.items = [...state.items, action.payload];
			}
		},
		reduceItemQuantity: (state, action) => {
			const { id } = action.payload;
			const itemId = state.items.findIndex((item) => item.data.id === id);
			for (let item of state.items) {
				// short circuit evaluation
				// if left is false then it will not execute the left condition 
				// here short circuit happen it avoid unnecessary computation
				id === item.data.id && (
					item.quantity === 1
						? state.items.splice(itemId, 1)
						: (item.quantity -= 1)
				);
			}
		},
		increaseItemQuantity :(state, action)=>{
			const { id } = action.payload;
			const itemId = state.items.findIndex((item) => item.data.id === id);
			
			state.items[itemId].quantity += 1;
		},
		clearCart: function (state, action) {
			state.items.length = 0;
		},
	},
});

export default cart.reducer;

export const { addItem, increaseItemQuantity, clearCart, reduceItemQuantity } = cart.actions;
