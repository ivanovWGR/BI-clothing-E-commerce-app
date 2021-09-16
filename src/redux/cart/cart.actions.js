import {
  TOOGLE_CART_HIDDEN,
  CLEAR_ITEM_FROM_CART,
  ADD_ITEM,
  REMOVE_ITEM,
} from "./cart.types";

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

export const clearItemFromCart = (newItemId) => {
  return {
    type: CLEAR_ITEM_FROM_CART,
    payload: newItemId,
  };
};

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};

export default toogleCartHidden;
