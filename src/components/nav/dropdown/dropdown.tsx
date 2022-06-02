import React, { Component } from 'react';
import { DropdownProps } from '../../../interfaces';
import DropdownBtn from './dropdownBtn';
import DropdownDisplay from './dropdownDisplay';
import './dropdown.css';

export default class Dropdown extends Component<DropdownProps> {
  state = {
    open: false,
  };
  
  componentDidMount() {
    if (this.props.hasOverlay) {
      this.setState({ open:this.props.hasOverlay });
    }
  }

  componentDidUpdate() {
    if (this.props.toggleOverlay) {
      if (this.props.hasOverlay !== this.state.open) {
        this.setState({ open:this.props.hasOverlay });
      }
    }
  }

  toggleOpen = () => {
    if (this.props.toggleOverlay) {
      this.props.toggleOverlay();
    } else {
      this.setState({ open: !this.state.open });
    }
  };

  render() {
    const { open } = this.state;
    const { children, icon, icon2, icon3 } = this.props;
    return (
      <div className="drp">
        <DropdownBtn
          icon={icon}
          icon2={icon2}
          icon3={icon3}
          toggleOpen={this.toggleOpen}
          open={open}
        />
        <DropdownDisplay
          icon={icon2}
          open={open}
          toggleOpen={this.toggleOpen}
          
          >{children}</DropdownDisplay>
      </div>
    );
  }
}
