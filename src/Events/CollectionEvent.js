import React from "react";
import "/media/shrey/Shrey/MemeIt/memeit/src/CollectionButton.css";
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
