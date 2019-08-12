import React from "react";
import styled from "styled-components";

const TechStackBase = props => {
  return (
    <div className={props.className}>
      {/* TODO: Fill this out with rails, redux, saga, kotlin */}
      <img src={require("../assets/react-logo-dark.svg")} />
      <img src={require("../assets/github.svg")} />
    </div>
  );
};

const TechStack = styled(TechStackBase)`
  display: flex;
  justify-content: space-around;
  background-color: #f9f9fa;
  height: 100px;

  > img {
    max-width: 50px;
  }
`;

export default TechStack;
