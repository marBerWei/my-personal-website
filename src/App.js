import React, { Component } from 'react';
import './App.css';
import About from './components/tabs/About'
import Welcome from './components/home/Welcome'// aka home
import Stuff from './components/tabs/Stuff'
import Contact from './components/tabs/Contact'
import Blog from './components/tabs/Blog'
import Background from './components/tabs/Background'
import Header from './components/header'
import MainPage from './components/mainPage'
import ToolBar from './components/ToolBar'
import {connect} from 'react-redux'
import { withRouter} from 'react-router'
import * as actions from './actions/addJson'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class App extends React.Component {

  render() {
    //console.log(this.props)

    return  (
      <HashRouter>

        <div className="App">
          <Header/>
          <Route exact path="/" component={MainPage}/>
          <Route path="/about" component={About}/>
          <Route path="/stuff" component={Stuff}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/blog" component={Blog}/>
       
          
        </div>
      </HashRouter>
  )
  }
}

// <li><NavLink to="/blog">Blog</NavLink></li>

const mapStateToProps = (state) => {
  return {
    json: state.json
  }
}
export default withRouter(connect(mapStateToProps, actions)(App));