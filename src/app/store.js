import {
    configureStore
} from "@reduxjs/toolkit";
import cartSlicer from "../features/cart/cartSlice";

const store = configureStore({
    reducer: {
        cartSlice: cartSlicer
    }
})

export default store;