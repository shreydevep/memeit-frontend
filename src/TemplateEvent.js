import React from "react";
import "./TemplateButton.css";
import { useHistory } from "react-router";

const TemplateEvent = () => {
  const history = useHistory();
  const templateEvent = (props) => {
    history.push("/template");
    console.log("./api/v1/template");
  };
  return (
    <div>
      <button className="templatebutton" onClick={templateEvent}>
        Templates
      </button>
    </div>
  );
};

export default TemplateEvent;
