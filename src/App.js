import React from "react";
import "./App.css";
import SignIn from "./components/login";
import Dashboard from "./components/dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import LogoutPage from "./components/logout";
import Survey from "./components/survey"
import HideAppBar from "./components/navbar"
const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <HideAppBar/>
        <Router>
          <Switch>
            <Route exact path="/">
              <SignIn />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/logout">
              <LogoutPage />
            </Route>
            <Route path="/surveys">
              <Survey/>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
