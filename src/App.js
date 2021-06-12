import React, { Component } from "react";
import "./App.css";
import "/media/shrey/Shrey/MemeIt/memeit/src/ImageGrid.css";
import CollectionEvent from "./Events/CollectionEvent";
import TemplateEvent from "./Events/TemplateEvent";
import Template from "./Events/Template";
import { CanvasDraw } from "./Events/CanvasDraw";
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

const CanvasRoute = () => {
  return (
    <div>
      <CanvasDraw />
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
        </Switch>
      </Router>
    );
  }
}

export default App;
