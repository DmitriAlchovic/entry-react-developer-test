import React, { Component } from 'react';
import { DropdownBtnProps } from '../../../../interfaces';
import './dropdownBtn.css';



export default class DropdownBtn extends Component<DropdownBtnProps> {
  render() {
    const { icon, icon2, icon3, toggleOpen, open } = this.props;
    return (
      <button
        onClick={() => {
          toggleOpen();
        }}
        className="dropbtn"
      >
        <div className={icon2 ? 'currency' : 'inCart'}>{icon3}</div>
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
    );
  }
}
