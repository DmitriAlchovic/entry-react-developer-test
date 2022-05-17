import React, { Component } from "react";
import { CartProps } from "../../interfaces";
import { GET_PRODUCT } from "../../query/product";
import CartCard from "./cartCard";
import { Link } from "react-router-dom";
import { Query } from "@apollo/client/react/components";
import "./cart.css";

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
    const cartArr = cart.map(({ id, attributes, productQuantity }, index) => {
      return (
        <div key={index}>
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
                    dropdown={true}
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
      <div
        className="cartContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p className="myBag">
          My Bag,
          <span className="cartItems">
            {productQuantity} {productQuantity > 1 ? "items" : "item"}{" "}
          </span>
        </p>
        {cartArr}
        <div className="priceSum">
          <div className="totalDrop">Total</div>
          <div className="sum">
            {currentCurrency}
            {Math.round((productsSum + taxSum) * 100) / 100}
          </div>
        </div>
        <div className="cartBtnContainer">
          <Link to={"/cart"}>
            <button className="vievBagBtn">VIEW BAG</button>
          </Link>
          <button className="checkOutBtn">CHECK OUT</button>
        </div>
      </div>
    );
  }
}
