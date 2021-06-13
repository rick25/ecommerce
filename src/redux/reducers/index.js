import { combineReducers } from "redux";
import cart from "./cart.reducer";
import products from "./products.reducer";
import brands from "./brands.reducer";
import { brandFilterReducer } from "./brand.filter.reducer";
import { orderByPriceReducer } from "./orderByPrice.filter.reducer";
import { paginationReducer } from "./pagination.reducer";

export default combineReducers({
  products,
  brands,
  cart,
  brandFilter: brandFilterReducer,
  orderBy: orderByPriceReducer,
  pagination: paginationReducer,
});
