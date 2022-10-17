import {
    combineReducers,
    configureStore
} from "@reduxjs/toolkit";
import cartSlicer from "../features/cart/cartSlice";
import storage from "redux-persist/lib/storage";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistReducer
} from "redux-persist";

const persistConfig = {
    key: "persistentCart",
    storage
}

const reducer = combineReducers({
    cartSlice: cartSlicer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export default store;