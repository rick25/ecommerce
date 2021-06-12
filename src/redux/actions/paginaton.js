export const PREV_PAGE = "PREV_PAGE";
export const NEXT_PAGE = "NEXT_PAGE";
export const GO_PAGE = "GO_PAGE";
export const COUNT_ITEM = "COUNT_ITEM";

export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const prevPage = () => ({
  type: PREV_PAGE,
});

export const goPage = (n) => ({
  type: GO_PAGE,
  currentPage: n,
});

export const countItem = (n) => ({
  type: COUNT_ITEM,
  totalItemsCount: n,
});
