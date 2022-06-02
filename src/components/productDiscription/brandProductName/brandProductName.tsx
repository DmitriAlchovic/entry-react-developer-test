import React, { Component } from 'react';
import { BrandPropductNameProps } from '../../../interfaces';
import './brandProductName.css';

export default class BrandPropductName extends Component<BrandPropductNameProps> {
  render() {
    const { brand, productName } = this.props;
    return (
      <div>
        <p className="brandName">{brand}</p>
        <p className="productName">{productName}</p>
      </div>
    );
  }
}
