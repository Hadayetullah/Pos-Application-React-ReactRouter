// src/app/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import displayProductsSlice from "./features/displayProductsSlice";

const rootReducer = combineReducers({
  displayProducts: displayProductsSlice,
});

export default rootReducer;
