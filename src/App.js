import React from "react";
import "./App.css";
import Header1 from "./Header/Header1";
import Home from "./Home/Home";
import Login from "./components/Login/Login";
import Grade from "./components/Grade/Grade";
import Subject from "./components/Subject/Subject";
import Chapters from "./components/Chapters/Chapters";
import ChapIntro from "./components/ChapIntro/ChapIntro";
import Chapdetail from "./components/Chapdetail/Chapdetail";
import Footer from "./components/Footer";
import Game from "./components/Game/Game";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from "./globalStyles";
function App() {
  return (
    //BEM
    <React.Fragment>
      <ChakraProvider>
        <Router>
          <GlobalStyle />
          <>
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
                <Home />
              </Route>
            </Switch>
          </>
          {/* <Footer /> */}
        </Router>
      </ChakraProvider>
    </React.Fragment>
  );
}

export default App;
