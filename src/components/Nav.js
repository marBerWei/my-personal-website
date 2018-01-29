import React from 'react'
import { NavLink } from 'react-router-dom'
import MdFileDownload from 'react-icons/lib/md/file-download'

class Nav extends React.Component {
  render() {
    return (
      <div>
      <ul>
        <li class="dropdown">
          <NavLink activeClassName="active" to="/">Home</NavLink>
        </li>
        <li class="dropdown">
          <NavLink activeClassName="active" to="/stuff">Portfolio</NavLink>
          <div class="dropdown-content">
		
          </div>
        </li>
        <li class="dropdown"><NavLink activeClassName="active" to="/about">About Me</NavLink></li>
        <li class="dropdown"><a href="https://martina147.typeform.com/to/tFPgmP" activeClassName="active">Contact</a></li>
      </ul>
      <div className="icons-right" ><a href="https://docs.google.com/document/d/1--VRekGKNXuAMpDsscZXnYLRKF1WCULA3VVq8uJ9kKA/edit?usp=sharing" className="icons-right"><MdFileDownload/>My Resume</a></div>
      </div>
    )
  }
}


export default Nav

// <ul>
//   <li class="dropdown">
//     <NavLink activeClassName="active" to="/">Home</NavLink>
//   </li>
//   <li class="dropdown">
//     <NavLink activeClassName="active" to="/stuff">Portfolio</NavLink>
//     <div class="dropdown-content">
// <NavLink activeClassName="active" to="/findMyFarmer">Find My Farmer</NavLink>
// <NavLink activeClassName="active" to="/NYTimesArchiver">NY Times Archiver</NavLink>
//     </div>
//   </li>
//   <li class="dropdown"><NavLink activeClassName="active" to="/about">About Me</NavLink></li>
//   <li class="dropdown"><a href="https://martina147.typeform.com/to/tFPgmP" activeClassName="active">Contact</a></li>
// </ul>