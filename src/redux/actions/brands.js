export const ADD_BRAND_TO_FILTER = "ADD_BRAND_TO_FILTER";
export const REMOVE_BRAND_FROM_FILTER = "REMOVE_BRAND_FROM_FILTER";

export const addBrandToFilter = (brand) => {
  return {
    type: ADD_BRAND_TO_FILTER,
    brand,
  };
};

export const removeBrandFromFilter = (brand) => {
  return {
    type: REMOVE_BRAND_FROM_FILTER,
    brand,
  };
};
