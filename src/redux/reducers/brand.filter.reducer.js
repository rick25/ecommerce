import {
  ADD_BRAND_TO_FILTER,
  REMOVE_BRAND_FROM_FILTER,
} from "../actions/brands";

const initialState = "";

export const brandFilterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BRAND_TO_FILTER:
      if (state.includes(payload)) return state;
      return (state += payload);

    case REMOVE_BRAND_FROM_FILTER:
      const reg = new RegExp(payload, "gi");
      return state.replace(reg, "");

    default:
      return state;
  }
};
