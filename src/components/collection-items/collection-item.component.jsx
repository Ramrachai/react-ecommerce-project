import React from "react";
import "./collection-item.styles.scss";

export default function CollectionItems({ id, imageUrl, name, price }) {
  return (
    <div className="collection-item" key={id}>
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="text-content">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
}
