import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  cash: cashReducer,
  customer: customerReducer,
});
export const store = configureStore(
  {
    reducer: rootReducer,
  },
  composeWithDevTools()
);

export default store;
