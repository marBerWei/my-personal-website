import React, { Component } from "react";
import "./App.css";
import About from "./components/tabs/About";
import Stuff from "./components/tabs/Stuff";
import Contact from "./components/tabs/Contact";
import Blog from "./components/tabs/Blog";
import Header from "./components/header/Header";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "./actions/addJson";
import { Route, HashRouter } from "react-router-dom";
import Home from "./components/tabs/Home";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          {/* Actual header */}
          <Header />

          {/* Defined routes */}
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
          <Route path="/stuff" component={Stuff} />
        </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    json: state.json
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(App)
);
