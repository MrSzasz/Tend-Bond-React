import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const idOfProduct = state.find(prod => prod.id === action.payload.id)
            if (idOfProduct) {
                idOfProduct.qty = action.payload.qty
            } else {
                state.push(action.payload)
            }
        },
        deleteFromCart: (state, action) => {
            const idOfProduct = state.find(prod => prod.id === action.payload)
            state.splice(state.indexOf(idOfProduct), 1)
        },
        buyCart: (state, action) => {
            console.log("action => " + action.payload);
        },
    }
})

export const {
    addToCart,
    deleteFromCart,
    buyCart
} = cartSlice.actions
export default cartSlice.reducer;