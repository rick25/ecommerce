import {
  ADD_PRODUCT_TO_CART,
  DECREMENT_CART_ITEM_QUANTITY,
  INCREMENT_CART_ITEM_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
} from "../actions/cart";

const initialState = [];

const cartReducer = (state = initialState, { type, payload }) => {
  let updatedCart;
  let updatedItemIndex;

  switch (type) {
    case INCREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state];
      updatedItemIndex = updatedCart.findIndex((item) => item.id === payload);

      const incrementedItem = {
        ...updatedCart[updatedItemIndex],
      };

      incrementedItem.quantity++;

      updatedCart[updatedItemIndex] = incrementedItem;

      return [...updatedCart];

    case DECREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state];
      updatedItemIndex = updatedCart.findIndex((item) => item.id === payload);

      const decrementedItem = {
        ...updatedCart[updatedItemIndex],
      };

      decrementedItem.quantity--;

      updatedCart[updatedItemIndex] = decrementedItem;

      return [...updatedCart];

    case ADD_PRODUCT_TO_CART:
      updatedCart = [...state];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === payload.id
      );

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };

        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return [...updatedCart];

    case REMOVE_PRODUCT_FROM_CART:
      updatedCart = [...state];
      updatedItemIndex = updatedCart.findIndex((item) => item.id === payload);

      updatedCart.splice(updatedItemIndex, 1);

      return [...updatedCart];

    default:
      return state;
  }
};

export default cartReducer;
