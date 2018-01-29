import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li class="dropdown">
          <NavLink activeClassName="active" to="/">Home</NavLink>
        </li>
        <li class="dropdown">
          <NavLink activeClassName="active" to="/stuff">Portfolio</NavLink>
          <div class="dropdown-content">
			<NavLink activeClassName="active" to="/findMyFarmer">Find My Farmer</NavLink>
			<NavLink activeClassName="active" to="/NYTimesArchiver">NY Times Archiver</NavLink>
          </div>
        </li>
        <li class="dropdown"><NavLink activeClassName="active" to="/about">About Me</NavLink></li>
        <li class="dropdown"><a href="https://martina147.typeform.com/to/tFPgmP" activeClassName="active">Contact</a></li>
      </ul>
    )
  }
}


export default Nav



// <ul className="header">
//               
//             </ul>
//             <div className="content">
//               <Route exact path="/" component={Background}/>
//               <Route path="/about" component={About}/>
//               <Route path="/stuff" component={Stuff}/>
//               <Route path="/contact" component={Contact}/>
//               <Route path="/blog" component={Blog}/>
//             </div>