import React, { useState } from "react";
import "./shoppage.styles.scss";
import SHOP_DATA from "./shop.data.js";
import PREVIEW_COLLECTIONS from "../../components/preview.collection.component/preview";

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map((collect) => (
        <PREVIEW_COLLECTIONS {...collect} key={collect.id} />
      ))}
    </div>
  );
};

export default ShopPage;
