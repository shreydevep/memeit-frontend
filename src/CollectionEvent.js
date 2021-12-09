import React from "react";
import { useHistory } from "react-router";
import "./CollectionButton.css";

const CollectionEvent = () => {
  const history = useHistory();
  const collectionEvent = (props) => {
    console.log("./api/v1/collection");
    history.push("/collection");
  };
  return (
    <div>
      <button className="collectionbutton" onClick={collectionEvent}>
        Collection
      </button>
    </div>
  );
};

export default CollectionEvent;
