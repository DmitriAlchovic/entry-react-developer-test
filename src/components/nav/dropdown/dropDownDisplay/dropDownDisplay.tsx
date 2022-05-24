import {Component} from "react";
import { DropDownDisplayProps } from "../../../../interfaces";
import "./dropDownDisplay.css"


export default class DropDownDisplay extends Component<DropDownDisplayProps> {
    render(){
    const {icon, open, toggleOpen, children} = this.props;
        return( <div
          className="dropdown"
          onClick={() => {
           toggleOpen();
          }}
        >
          {open && (
            <div>
              <div
                className={
                  icon ? "dropdownBackground" : "dropdownBackgroundGrey"
                }
              ></div>
              {children}
            </div>
          )}
        </div>)
    }
}