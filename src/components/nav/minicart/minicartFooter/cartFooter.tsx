import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MinicartFooterProps } from '../../../../interfaces';
import './minicartFooter.css';

export default class MinicartFooter extends Component<MinicartFooterProps> {
  render() {
    const { currentCurrency, totalSum, toggleOverlay } = this.props;
    return (
      <div>
        <div className="priceSum">
          <div className="totalDrop">Total</div>
          <div className="sum">
            {currentCurrency}
            {totalSum}
          </div>
        </div>
        <div className="cartBtnContainer">
          <Link className="vievBagRef" to={'/cart'}>
            <button onClick={()=>{toggleOverlay();}} className="vievBagBtn">VIEW BAG</button>
          </Link>
          <button className="checkOutBtn">CHECK OUT</button>
        </div>
      </div>
    );
  }
}
