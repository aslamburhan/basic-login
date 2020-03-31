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
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from "@material-ui/core";
const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
});
const store = configureStore();

function App() {
  return (
    <div className="App">
<CssBaseline/>
      <Provider store={store}>
      <ThemeProvider theme={theme}>

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
            <Route path="/surveys/:type">
              <Survey/>
            </Route>
          </Switch>
        </Router>
        </ThemeProvider>

      </Provider>

    </div>
  );
}

export default App;
