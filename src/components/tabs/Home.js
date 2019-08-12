import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TechStack from "../TechStack";

const profilePicture = require("../../assets/photos_of_me/headshot.jpeg");

// TODO: Incorporate these
// const flowers = require("../../assets/photos_of_me/flowers.JPG");
// const boat = require("../../assets/photos_of_me/boat.JPG");
// const singing = require("../../assets/photos_of_me/singing.jpg");
// <img src={flowers} />
// <img src={boat} />
// <img src={singing} />

const Home = props => {
  return (
    <div className={props.className}>
      <div className="content">
        <div className="content--picture">
          <img src={profilePicture} />
        </div>

        <div className="content--more">
          <div>
            Studying Opera gave me experience with linguistic pattern
            recognition - a skill that translates beautifully to code.
          </div>

          <Link to="/about">More About Me</Link>
        </div>
      </div>

      <TechStack />
    </div>
  );
};

const StyledHome = styled(Home)`
  padding: 30px;

  .content {
    display: flex;
    align-items: flex-end;
    padding: 10px;

    &--more {
      display: flex;
      flex-direction: column;

      > div {
        color: gray;
        font-size: 20px;
        margin-bottom: 30px;
      }

      a {
        background-color: #0d1f35;
        color: white;
        font-size: 20px;
        padding: 10px;
        border-radius: 5px;
        width: 100%;

        :hover {
          opacity: 0.5;
          transition-duration: 500ms;
        }
      }
    }

    &--picture {
      margin-right: 30px;

      > img {
        width: 300px;
        /* height: auto; */
      }
    }
  }
`;

export default StyledHome;
