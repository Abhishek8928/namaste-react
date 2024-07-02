

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../Utils/cartSlice"
import cartSlice from '../Utils/cartSlice';

export default Store = configureStore({
    reducer:{
        cart: cartReducer
    }
})


