import React from "react";
import Base from "../Components/Base";
import userContext from "../context/userContext";

function Services() {
  return (
    <userContext.Consumer>
      {(user) => (
        <Base>
          <h1>service page</h1>
          <h1>welcome {user.name}</h1>
        </Base>
      )}
    </userContext.Consumer>
  );
}

export default Services;
