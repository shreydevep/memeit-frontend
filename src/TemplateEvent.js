import React from "react";
import "./TemplateButton.css";
const templateEvent = (props) => {
  console.log("./api/v1/template");
};
const TemplateEvent = () => {
  return (
    <div>
      <button className="templatebutton" onClick={templateEvent}>
        Templates
      </button>
    </div>
  );
};

export default TemplateEvent;
