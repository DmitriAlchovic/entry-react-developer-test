import {Component} from "react";
import "./dropDownBtn.css"

export interface DropDownBtnProps {
    icon:string;
    icon2?:string;
    icon3?:string|number;
    toggleOpen:Function;
    open:boolean;
}

export default class DropDownBtn extends Component<DropDownBtnProps> {
    render(){
    const {icon, icon2, icon3, toggleOpen, open} = this.props;
        return(<button
          onClick={() => {
           toggleOpen(); 
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
        </button>)
    }
}