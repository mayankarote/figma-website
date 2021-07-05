import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Header1 from "./Header/Header1";
import Home from "./Home/Home";
import Login from "./components/Login/Login";
import Grade from "./components/Grade/Grade";
import Subject from "./components/Subject/Subject";
import Chapters from "./components/Chapters/Chapters";
import ChapIntro from "./components/ChapIntro/ChapIntro";
import Chapdetail from "./components/Chapdetail/Chapdetail";
import Game from "./components/Game/Game";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    //BEM
    <React.Fragment>
      <ChakraProvider>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/game">
                <Header1 />
                <Game />
              </Route>

              <Route exact path="/chapdetail">
                <Header1 />
                <Chapdetail />
              </Route>

              <Route exact path="/chapintro">
                <Header1 />
                <ChapIntro />
              </Route>

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
