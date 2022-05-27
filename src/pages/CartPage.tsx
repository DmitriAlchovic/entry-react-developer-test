import  { Component } from "react";
import { CartPageProps } from "../interfaces";
import "./CartPage.css";
import CartQuery from "../components/cartCard/cartQuery";
import CartPageFooter from "../components/cartPageFooter";

export default class CartPage extends Component<CartPageProps> {
  render() {
    const {
      cart,
      currentCurrency,
      setAttributeInCartHandler,
      changeProductQuantity,
    } = this.props;

    const productQuantity = cart.reduce(
      (prev, item) => prev + item.productQuantity,
      0
    );

    const productsSum = cart.reduce((prev, item) => {
      const idx = item.prices.findIndex(
        (value) => value.currency.symbol === currentCurrency
      );
      return prev + item.prices[idx].amount * item.productQuantity;
    }, 0);

    const taxSum = Math.ceil(productsSum * 0.21 * 100) / 100;
    const totalPrice = Math.round((productsSum + taxSum) * 100) / 100
    const cartArr = cart.map(({ id }, index) => (
      <CartQuery
        key={index}
        id={id}
        isDropdown={false}
        changeProductQuantity={changeProductQuantity}
        cart={cart}
        setAttributeInCartHandler={setAttributeInCartHandler}
        currentCurrency={currentCurrency}
      />
    ));


    return (
      <div className="cartPageContainer">
        <p className="cartPageName">CART</p>
        {cartArr}
        <CartPageFooter productQuantity={productQuantity} totalPrice={totalPrice} taxSum={taxSum} />
        <button className="orderBtn">ORDER</button>
      </div>
    );
  }
}
