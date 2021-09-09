import { TOOGLE_CART_HIDDEN } from "./cart.types";
import { ADD_ITEM } from "./cart.types";
import { addNewItemToCart } from "./cart.utills";

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

    default:
      return state;
  }
};

export default cartReducer;
