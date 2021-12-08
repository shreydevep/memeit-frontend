import React from "react";
import "./CollectionButton.css";
const collectionEvent = (props) => {
  console.log("./api/v1/collection");
};
const CollectionEvent = () => {
  return (
    <div>
      <button className="collectionbutton" onClick={collectionEvent}>
        Collection
      </button>
    </div>
  );
};

export default CollectionEvent;
