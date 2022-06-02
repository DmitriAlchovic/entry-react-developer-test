import React, { Component } from 'react';
import { CartHeaderProps } from '../../../../interfaces';
import './minicartHeader.css';

export default class MinicartHeader extends Component<CartHeaderProps> {
  render() {
    const { productQuantity } = this.props;
    return (
      <div>
        <p className="myBag">
          My Bag,
          <span className="cartItems">
            {productQuantity} {productQuantity > 1 ? 'items' : 'item'}
          </span>
        </p>
      </div>
    );
  }
}
