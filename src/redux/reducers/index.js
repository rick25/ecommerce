import { combineReducers } from "redux";
import cart from "./cart.reducer";
import { brandFilterReducer } from "./brand.filter.reducer";
import { orderByPriceReducer } from "./orderByPrice.filter.reducer";
import { paginationReducer } from "./pagination.reducer";

export default combineReducers({
  cart,
  brandFilter: brandFilterReducer,
  orderBy: orderByPriceReducer,
  pagination: paginationReducer,
});
