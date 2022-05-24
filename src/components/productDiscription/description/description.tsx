import { Component } from "react";
import { DescriptionProps } from "../../../interfaces";
import "./description.css";



export default class Description extends Component<DescriptionProps> {
  render() {
    const { description } = this.props;
    return (
      <div
        className="discriptionOfProduct"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    );
  }
}
