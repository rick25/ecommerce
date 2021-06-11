export const ORDER_BY_ASC = "ORDER_BY_ASC";
export const ORDER_BY_DESC = "ORDER_BY_DESC";
export const CLEAR_ORDER_BY_PRICE = "CLEAR_ORDER_BY_PRICE";

export const orderByAsc = () => {
  return {
    type: ORDER_BY_ASC,
  };
};

export const orderByDesc = () => {
  return {
    type: ORDER_BY_DESC,
  };
};

export const clearOrderBy = () => {
  return {
    type: CLEAR_ORDER_BY_PRICE,
  };
};
