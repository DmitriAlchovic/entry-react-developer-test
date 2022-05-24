import { Component } from "react";
import "./cartPageFooter.css";

export interface CartPageFooterProps {
  taxSum: number;
  totalPrice: number;
  productQuantity: number;
}

export default class CartPageFooter extends Component<CartPageFooterProps> {
  render() {
    const { taxSum, totalPrice, productQuantity } = this.props;
    return (
      <div className="totalContainer">
        <div className="totalCategory">
          <p>Quantity:&nbsp;</p>
          <p>Tax 21%:&nbsp;</p>
          <p>Total:&nbsp;</p>
        </div>
        <div className="total">
          <p>{productQuantity}</p>
          <p>{taxSum}</p>
          <p>{totalPrice}</p>
        </div>
      </div>
    );
  }
}
