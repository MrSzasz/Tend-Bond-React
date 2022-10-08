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
        }
    }
})

export const {
    addToCart,
    deleteFromCart
} = cartSlice.actions
export default cartSlice.reducer;