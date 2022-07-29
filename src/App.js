import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Error404 from "./components/404";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Switch>
          <Route exact path="/Countries/detail/:slug" component={Detail} />

          <Route exact path="/Countries" component={Home} />
          <Route component={Error404} />
          <Redirect from="*" to="/Countries/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
