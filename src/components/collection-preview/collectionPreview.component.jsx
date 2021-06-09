import React from "react";
import "./collectionPreview.styles.scss";
import CollectionItems from "../collection-items/collection-item.component";

const collectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({id, ...otherProps}) => {
            return <CollectionItems key={id} {...otherProps} />;
          })}
      </div>
    </div>
  );
};

export default collectionPreview;
