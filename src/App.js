import React, { Component } from 'react';
import './App.css';
import About from './components/tabs/About'
import Welcome from './components/home/Welcome'// aka home
import Stuff from './components/tabs/Stuff'
import Contact from './components/tabs/Contact'
import Blog from './components/tabs/Blog'
import Background from './components/tabs/Background'
import {connect} from 'react-redux'
import { withRouter} from 'react-router'
import * as actions from './actions/addJson'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class App extends React.Component {
  componentWillMount() {
    const obj = this.props.jsonObj
    this.props.addJson(obj)
  }

  render() {
    //console.log(this.props)
    const profileData = this.props.jsonObj.basics;
    const aboutData = profileData.summary;

    return  (
      <HashRouter>
        <div className="App">
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/stuff">Stuff</NavLink></li>
              <li><NavLink to="/background">Background</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Welcome}/>
              <Route path="/about" component={About}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/blog" component={Blog}/>
              <Route path="/background" component={Background}/>
            </div>
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