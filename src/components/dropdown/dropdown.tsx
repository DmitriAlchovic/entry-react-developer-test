import React, { Component } from "react";
import { DropdownProps } from "../../interfaces";
import "./dropdown.css";

export default class Dropdown extends Component<DropdownProps> {
  state = {
    open: false,
  };

  render() {
    const { open } = this.state;
    const { children, icon, icon2, icon3 } = this.props;
    return (
      <div className="drp">
        <button
          onClick={() => {
            this.setState({ open: !open });
          }}
          className="dropbtn"
        >
          <div className={icon2 ? "currency" : "inCart"}>{icon3}</div>
          &nbsp;
          {icon2 ? (
            open ? (
              <img src={icon2} />
            ) : (
              <img src={icon} />
            )
          ) : (
            <img src={icon} />
          )}
        </button>
        <div
          className="dropdown"
          onClick={() => {
            this.setState({ open: false });
          }}
        >
          {open && (
            <div>
              <div
                className={
                  icon2 ? "dropdownBackground" : "dropdownBackgroundGrey"
                }
              ></div>
              {children}
            </div>
          )}
        </div>
      </div>
    );
  }
}
