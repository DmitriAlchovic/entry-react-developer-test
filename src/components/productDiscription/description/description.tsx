import React, { Component } from 'react';
import { DescriptionProps } from '../../../interfaces';
import parse from 'html-react-parser';
import './description.css';

export default class Description extends Component<DescriptionProps> {
  render() {
    const { description } = this.props;
    const descriptionParsed = parse(description);
    return (
      <div
        className="discriptionOfProduct"
      >{descriptionParsed}</div>
    );
  }
}
