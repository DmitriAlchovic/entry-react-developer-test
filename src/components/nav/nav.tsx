import React, { Component, ReactComponentElement } from "react";
import "./nav.css";
import { NavProps } from "../../interfaces";



export default class Nav extends Component<NavProps> {
  render() {
    const {children} = this.props;
    return (
    <div className="navBar">{children}</div> 
    );
  }
}
