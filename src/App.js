import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./components/Login";
import Grade from "./components/Grade";
import Subject from "./components/Subject";
import Chapters from "./components/Chapters";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    //BEM
    <React.Fragment>
      <ChakraProvider>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/chapters">
                <Chapters />
              </Route>

              <Route path="/subject">
                <Subject />
              </Route>

              <Route path="/grade">
                <Grade />
              </Route>

              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </ChakraProvider>
    </React.Fragment>
  );
}

export default App;
