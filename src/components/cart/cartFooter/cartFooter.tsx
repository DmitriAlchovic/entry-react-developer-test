import { Component } from "react";
import { Link } from "react-router-dom";
import { CartFooterProps } from "../../../interfaces";
import "./cartFooter.css"



export default class CartFooter extends Component<CartFooterProps> {
  render() {
    const { currentCurrency, totalSum } = this.props;
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
          <Link className="vievBagRef" to={"/cart"}>
            <button className="vievBagBtn">VIEW BAG</button>
          </Link>
          <button className="checkOutBtn">CHECK OUT</button>
        </div>
      </div>
    );
  }
}
