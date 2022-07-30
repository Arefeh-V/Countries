import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
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
      <React.StrictMode>
        <HashRouter basename='/'>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail/:slug" component={Detail} />

            <Route component={Error404} />
            <Redirect from="*" to="/404" />
          </Switch>
        </HashRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
