import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Error404 from "./components/404";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* // "homepage": "https://Arefeh-V.github.io/Countries", */}

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <ScrollToTop />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/detail/:slug" component={Detail} />

              <Route component={Error404} />
              <Redirect from="*" to="/404" />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
