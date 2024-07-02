

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../Utils/cartSlice"
import cartSlice from '../Utils/cartSlice';

const Store = configureStore({
    reducer:{
        cart: cartReducer
    }
})


export default Store;

