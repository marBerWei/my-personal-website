import React from "react";
import NavBar from "./NavBar";
import FaGithubSquare from "react-icons/lib/fa/github-square";
import FaFacebookOfficial from "react-icons/lib/fa/facebook-official";
import FaInstagram from "react-icons/lib/fa/instagram";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MdFileDownload from "react-icons/lib/md/file-download";

const HeaderBase = props => {
  return (
    <div className={props.className}>
      <NavLink activeClassName="active" to="/">
        <div>Martina Weidenbaum </div>

        <div>
          Software Engineer -
          <a
            className="resume"
            href="https://docs.google.com/document/d/1--VRekGKNXuAMpDsscZXnYLRKF1WCULA3VVq8uJ9kKA/edit?usp=sharing"
          >
            <MdFileDownload />
            My Resume
          </a>
        </div>

        <a href="https://github.com/marBerWei">
          <FaGithubSquare />
        </a>
        <a href="https://www.facebook.com/martina.weidenbaum">
          <FaFacebookOfficial />
        </a>
        <a href="https://www.instagram.com/martina625/?hl=en">
          <FaInstagram />
        </a>
      </NavLink>

      <div>
        <NavBar />
      </div>
    </div>
  );
};

const Header = styled(HeaderBase)`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 30px;
  background: #0d1f35;

  .resume,
  > a {
    color: white;
    font-size: 20px;
    font-weight: bold;

    svg {
      font-size: 20px;
      color: white;
      text-decoration-color: black;
    }
  }
`;

export default Header;
