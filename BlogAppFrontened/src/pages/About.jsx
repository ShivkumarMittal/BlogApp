import React from "react";
import Base from "../Components/Base";
import userContext from "../context/userContext";

function About() {
  return (
    <userContext.Consumer>
      {(user) => (
        <Base>
          <h1>this is page</h1>
          <h1>welcome: {user.name}</h1>
        </Base>
      )}
    </userContext.Consumer>
  );
}

export default About;
