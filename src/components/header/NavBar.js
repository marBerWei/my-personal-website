import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const NavBarBase = props => {
  return (
    <div className={props.className}>
      <NavLink activeClassName="active" to="/">
        Home
      </NavLink>

      <NavLink activeClassName="active" to="/stuff">
        Portfolio
      </NavLink>

      <NavLink activeClassName="active" to="/about">
        About Me
      </NavLink>

      <a
        href="https://martina147.typeform.com/to/tFPgmP"
        activeClassName="active"
      >
        Contact
      </a>
    </div>
  );
};

const NavBar = styled(NavBarBase)`
  display: flex;

  a {
    color: white;
    font-size: inherit;
    margin-right: 10px;
    padding: 5px;
  }

  a:hover {
    opacity: 0.5;
    transition: opacity 500ms linear;
  }
`;

export default NavBar;
