import React, { Component, createContext } from "react";

export const LoginContext = createContext();

export default class LoginContextProvider extends Component {
  state = {
    isLoggedin: false,
    username: "test",
    token: "",
  };
  render() {
    return (
      <LoginContext.Provider vlaue={{ ...this.state }}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}
