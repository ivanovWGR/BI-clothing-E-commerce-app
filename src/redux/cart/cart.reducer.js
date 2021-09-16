import {
  CLEAR_ITEM_FROM_CART,
  ADD_ITEM,
  TOOGLE_CART_HIDDEN,
  REMOVE_ITEM,
} from "./cart.types";

import { addNewItemToCart, removeItemFromCartUtill } from "./cart.utills";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case ADD_ITEM:
      let newArray = addNewItemToCart(state.cartItems, action.payload);
      return {
        ...state,
        cartItems: newArray,
      };

    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        ),
      };

    case REMOVE_ITEM:
      let newResposnse = removeItemFromCartUtill(
        state.cartItems,
        action.payload
      );
      return {
        ...state,
        cartItems: newResposnse,
      };

    default:
      return state;
  }
};

export default cartReducer;
