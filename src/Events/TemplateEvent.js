import React from "react";
import "/media/shrey/Shrey/MemeIt/memeit/src/TemplateButton.css";
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
