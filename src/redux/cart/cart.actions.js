import { TOOGLE_CART_HIDDEN } from "./cart.types";
import { ADD_ITEM } from "./cart.types";

const toogleCartHidden = () => {
  return {
    type: TOOGLE_CART_HIDDEN,
  };
};

export const addItemInCart = (object) => {
  return {
    type: ADD_ITEM,
    payload: object,
  };
};

export default toogleCartHidden;
