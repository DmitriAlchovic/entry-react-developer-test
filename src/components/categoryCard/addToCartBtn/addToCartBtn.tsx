import React, { Component } from 'react';
import EmptyCart from '../../../assets/Empty Cart2.svg';
import { AddToCartCircleBtnProps } from '../../../interfaces';
import './addToCartBtn.css';

export default class AddToCartBtn extends Component<AddToCartCircleBtnProps> {
  render() {
    const { addToCart, productId } = this.props;
    return (
      <button
        value={productId}
        onClick={(e) => {
          addToCart(e);
        }}
        className="circleCart"
      >
        <img className="cartIcon" src={EmptyCart} />
      </button>
    );
  }
}
