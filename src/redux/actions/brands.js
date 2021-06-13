import axios from "axios";
export const ADD_BRAND_TO_FILTER = "ADD_BRAND_TO_FILTER";
export const REMOVE_BRAND_FROM_FILTER = "REMOVE_BRAND_FROM_FILTER";
export const FETCH_BRANDS_REQUEST = "FETCH_BRANDS_REQUEST";
export const FETCH_BRANDS_SUCCESS = "FETCH_BRANDS_SUCCESS";
export const FETCH_BRANDS_FAILURE = "FETCH_BRANDS_FAILURE";

export const addBrandToFilter = (brand) => ({
  type: ADD_BRAND_TO_FILTER,
  payload: brand,
});

export const removeBrandFromFilter = (brand) => ({
  type: REMOVE_BRAND_FROM_FILTER,
  payload: brand,
});

export const fetchBrandsRequest = () => ({
  type: FETCH_BRANDS_REQUEST,
});

export const fetchBrandsSuccess = (data) => ({
  type: FETCH_BRANDS_SUCCESS,
  payload: data,
});

export const fetchBrandsFailure = (errorMessage) => ({
  type: FETCH_BRANDS_FAILURE,
  payload: errorMessage,
});

export const fetchBrands = () => {
  return (dispatch) => {
    dispatch(fetchBrandsRequest());
    axios
      .get(`http://localhost:3500/api/brands`)
      .then((response) => {
        dispatch(fetchBrandsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchBrandsFailure("Hbo un error al obtener los datos."));
      });
  };
};
