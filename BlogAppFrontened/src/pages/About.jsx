import React from "react";
import Base from "../Components/Base";
import userContext from "../context/userContext";

function About() {
  return (
    <userContext.Consumer>
      {(user) => {
        <Base>
          <h1>this is {user.name} page</h1>
        </Base>;
      }}
    </userContext.Consumer>
  );
}

export default About;
