import { Component } from "react";
import { DropdownProps } from "../../../interfaces";
import DropDownBtn from "./dropDownBtn";
import DropDownDisplay from "./dropDownDisplay";
import "./dropdown.css";

export default class Dropdown extends Component<DropdownProps> {
  state = {
    open: false,
  };

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;
    const { children, icon, icon2, icon3 } = this.props;
    return (
      <div className="drp">
        <DropDownBtn
          icon={icon}
          icon2={icon2}
          icon3={icon3}
          toggleOpen={this.toggleOpen}
          open={open}
        />
        <DropDownDisplay
          icon={icon2}
          open={open}
          toggleOpen={this.toggleOpen}
          children={children}
        />
      </div>
    );
  }
}
