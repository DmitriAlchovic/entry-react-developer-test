import { Component } from "react";
import { CartProps } from "../../../interfaces";
import "./minicart.css";
import MinicartQuery from "../../cartCard/cartQuery";
import MinicartFooter from "./minicartFooter/cartFooter";
import MinicartHeader from "./minicartHeader/minicartHeader";

export default class Minicart extends Component<CartProps> {
  render() {
    const {
      cart,
      currentCurrency,
      setAttributeInCartHandler,
      changeProductQuantity,
      productQuantity,
    } = this.props;

    const productsSum = cart.reduce((prev, item) => {
      const idx = item.prices.findIndex(
        (value) => value.currency.symbol === currentCurrency
      );
      return prev + item.prices[idx].amount * item.productQuantity;
    }, 0);

    const taxSum = Math.ceil(productsSum * 0.21 * 100) / 100;
    const totalSum = Math.round((productsSum + taxSum) * 100) / 100;
    const cartArr = cart.map(({ id }, index) => (
      <MinicartQuery
        key={index}
        id={id}
        isDropdown={true}
        changeProductQuantity={changeProductQuantity}
        cart={cart}
        setAttributeInCartHandler={setAttributeInCartHandler}
        currentCurrency={currentCurrency}
      />
    ));

    return (
      <div
        className="cartContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <MinicartHeader productQuantity={productQuantity} />
        {cartArr}
        <MinicartFooter totalSum={totalSum} currentCurrency={currentCurrency} />
      </div>
    );
  }
}
