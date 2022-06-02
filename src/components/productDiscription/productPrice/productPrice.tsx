import React, { Component } from 'react';
import './productPrice.css';
import { ProductPriceProps } from '../../../interfaces';

export default class ProductPrice extends Component<ProductPriceProps> {
  render() {
    const { currentCurrency, price } = this.props;
    return (
      <div>
        <p className="productPriceSign">PRICE:</p>
        <p className="productPrice">
          {currentCurrency}
          {price}
        </p>
      </div>
    );
  }
}
