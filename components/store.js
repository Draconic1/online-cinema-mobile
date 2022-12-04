import { configureStore, combineReducers } from "@reduxjs/toolkit";
import slice from "./reducerSlice";

const rootReducer = combineReducers({
    toolkit: slice,
});

export const store = configureStore({
    reducer: rootReducer,
});