import React, { Component } from 'react';
import { DropdownDisplayProps } from '../../../../interfaces';
import './dropdownDisplay.css';

export default class DropdownDisplay extends Component<DropdownDisplayProps> {
  render() {
    const {  open, toggleOpen, children } = this.props;
    return (
      <div
        className="dropdown"
        onClick={() => {
          toggleOpen();
        }}
      >
        {open && (
          <div>
            <div
              className='dropdownBackground'
            ></div>
            {children}
          </div>
        )}
      </div>
    );
  }
}
