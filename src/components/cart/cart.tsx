import { Component } from "react";
import { CartProps } from "../../interfaces";
import "./cart.css";
import CartQuery from "./cartQuery";
import CartFooter from "./cartFooter/cartFooter";
import CartHeader from "./cartHeader/cartHeader";

export default class Cart extends Component<CartProps> {
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
      <CartQuery
        key={index}
        id={id}
        dropdown={true}
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
        <CartHeader productQuantity={productQuantity} />
        {cartArr}
        <CartFooter totalSum={totalSum} currentCurrency={currentCurrency} />
      </div>
    );
  }
}
