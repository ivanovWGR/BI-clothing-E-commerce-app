import { createSelector } from "reselect";

const selectCartHidden = (state) => state.cart;

export const selectHidden = createSelector(selectCartHidden, (cart) => {
  return cart.hidden;
});

const selectCart = (state) => state.cart;
export const selectCartItems = createSelector(selectCart, (cart) => {
  return cart.cartItems;
});


export const selectCartTotal = createSelector(selectCartItems, (cartItems) => {
  return cartItems.reduce((acc, el) => {
    acc += el.price * el.quantity;
    return acc;
  }, 0);
});
