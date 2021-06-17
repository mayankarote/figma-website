import React from "react";
import "./App.css";
import Header from "./Header";
import Header1 from "./components/Header1";
import Home from "./Home";
import Login from "./components/Login";
import Grade from "./components/Grade";
import Subject from "./components/Subject";
import Chapters from "./components/Chapters";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    //BEM
    <React.Fragment>
      <ChakraProvider>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/chapters">
                <Header1 />
                <Chapters />
              </Route>

              <Route path="/subject">
                <Header1 />
                <Subject />
              </Route>

              <Route path="/grade">
                <Header1 />
                <Grade />
              </Route>

              <Route path="/login">
                <Header1 />
                <Login />
              </Route>

              <Route path="/">
                <Header />
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
