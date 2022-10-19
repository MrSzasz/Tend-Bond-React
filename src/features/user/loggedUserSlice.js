import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    user: null
};

export const loggedUserSlice = createSlice({
    name: 'loggedUser',
    initialState,
    reducers: {
        userLogIn: (state, action) => {
            state.user = action.payload
        },
        userLogOut: (state) => {
            state.user = null
        }
    }
})

export const {
    userLogIn,
    userLogOut
} = loggedUserSlice.actions

export default loggedUserSlice.reducer;