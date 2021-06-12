export const ADD_BRAND_TO_FILTER = "ADD_BRAND_TO_FILTER";
export const REMOVE_BRAND_FROM_FILTER = "REMOVE_BRAND_FROM_FILTER";

export const addBrandToFilter = (brand) => ({
  type: ADD_BRAND_TO_FILTER,
  payload: brand,
});

export const removeBrandFromFilter = (brand) => ({
  type: REMOVE_BRAND_FROM_FILTER,
  payload: brand,
});
