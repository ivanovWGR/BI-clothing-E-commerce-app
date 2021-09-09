import React from "react";
import CustomButton from "../custom-button.component/custom.button";
import "./collection.item.styles.scss";
import { addItemInCart } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  let { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer ">
        <span className="name">{name.toUpperCase()}</span>
        <span className="price">{price + "$"}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(addItemInCart(item))}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
