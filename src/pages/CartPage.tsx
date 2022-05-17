import React, { Component } from "react";
import { CartPageProps } from "../interfaces";
import { Query } from "@apollo/client/react/components";
import { GET_PRODUCT } from "../query/product";
import CartCard from "../components/cart/cartCard";
import "./CartPage.css";

export default class CartPage extends Component<CartPageProps> {
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

    const cartArr = cart.map(({ id, attributes, productQuantity }, index) => {
      return (
        <div className="productCart" key={index}>
          <Query query={GET_PRODUCT} variables={{ id }}>
            {(queryResult: any) => {
              const { data, loading, error } = queryResult;
              if (loading) {
                return <div>...Loading</div>;
              }
              if (data) {
                const { product } = data;
                return (
                  <CartCard
                    dropdown={false}
                    changeProductQuantity={changeProductQuantity}
                    cart={cart}
                    setAttributeInCartHandler={setAttributeInCartHandler}
                    product={product}
                    currentCurrency={currentCurrency}
                  ></CartCard>
                );
              }
              return null;
            }}
          </Query>
        </div>
      );
    });

    return (
      <div className="cartPageContainer">
        <p>CART</p>
        {cartArr}
        <div className="totalContainer">
          <div className="totalCategory">
            <p>Quantity:&nbsp;</p>
            <p>Tax 21%:&nbsp;</p>
            <p>Total:&nbsp;</p>
          </div>
          <div className="total">
            <p>{productQuantity}</p>
            <p>{taxSum}</p>
            <p>{Math.round((productsSum + taxSum) * 100) / 100}</p>
          </div>
        </div>
        <button className="orderBtn">ORDER</button>
      </div>
    );
  }
}
