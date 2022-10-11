import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const colorOfProduct = state.find(prod => prod.color === action.payload.color)
            if (colorOfProduct) {
                colorOfProduct.qty = action.payload.qty
            } else {
                state.push(action.payload)
            }
        },
        deleteFromCart: (state, action) => {
            const colorOfProduct = state.find(prod => prod.color === action.payload)
            state.splice(state.indexOf(colorOfProduct), 1)
        }
    }
})

export const {
    addToCart,
    deleteFromCart
} = cartSlice.actions
export default cartSlice.reducer;