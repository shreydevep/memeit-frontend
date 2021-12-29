import React, { Component } from "react";
import "./App.css";
import "./ImageGrid.css";
import CollectionEvent from "./CollectionEvent";
import TemplateEvent from "./TemplateEvent";
import EditTemplate from "./EditTemplate";
import Template from "./Template";
import Collection from "./Collection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Home page
const HomeRoute = () => (
  <div className="App">
    <body className="App-header">
      <TemplateEvent />
      <h1>Meme IT</h1>
      <CollectionEvent />
    </body>
  </div>
);

const TemplateRoute = () => {
  return (
    <div className="ImageGrid">
      <Template />
    </div>
  );
};

const CollectionRoute = () => {
  return <div className="ImageGrid">{<Collection />}</div>;
};
const EditTemplateRoute = () => {
  return (
    <div>
      <EditTemplate />
    </div>
  );
};
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/template" component={TemplateRoute} />
          <Route exact path="/collection" component={CollectionRoute} />
          <Route exact path="/edittemplate" component={EditTemplateRoute} />
        </Switch>
      </Router>
    );
  }
}

export default App;
