import React, { Component } from "react";
import Nav from "./components/nav";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppState, Price } from "./interfaces";
import Router from "./components/router";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default class App extends Component {
  state = {
    currentCurrency: "$",
    category: "all",
    cartArray: [
      {
        id: "ps-5",
        attributes: [
          { id: "Color", displayValue: "Green" },
          { id: "Capacity", displayValue: "1T" },
        ],
        productQuantity: 1,
        prices: [
          {
            __typename: "Price",
            amount: 844.02,
            currency: { __typename: "Currency", label: "USD", symbol: "$" },
          },
          {
            __typename: "Price",
            amount: 63826.91,
            currency: { __typename: "Currency", symbol: "₽", label: "RUB" },
          },
        ],
      },
    ],
  };

  changeProductQuantity = (id: string, productQuantity: number) => {
    this.setState((state: AppState) => {
      if (productQuantity === 0) {
        const idx = state.cartArray.findIndex((cart) => cart.id === id);
        const cartArray = [
          ...state.cartArray.slice(0, idx),
          ...state.cartArray.slice(idx + 1),
        ];
        return { cartArray };
      }
      const cartArray = this.toggleProperty(
        state.cartArray,
        id,
        "productQuantity",
        productQuantity
      );
      return { cartArray };
    });
  };

  changeCurrency = (event: React.ChangeEvent<HTMLButtonElement>) => {
    this.setState({ currentCurrency: event.target.value });
  };

  changeCategory = (newCategory: string) => {
    this.setState({ category: newCategory });
  };

  addToCartHandler = (id: string, attributes: Attr[], prices: Price[]) => {
    this.setState((state: AppState) => {
      const productQuantity = 1;
      const product = { id, attributes, productQuantity, prices };
      return { cartArray: [...state.cartArray, product] };
    });
  };

  setAttributeInCartHandler = (event: any, productId: string) => {
    this.setState((state: AppState) => {
      const idx = state.cartArray.findIndex((cart) => cart.id === productId);
      const attributes = this.toggleProperty(
        state.cartArray[idx].attributes,
        event.target.name,
        "displayValue",
        event.target.value
      );
      const productQuantity = state.cartArray[idx].productQuantity;
      const prices = state.cartArray[idx].prices;
      const product = { id: productId, attributes, productQuantity, prices };
      const cartArray = [
        ...state.cartArray.slice(0, idx),
        product,
        ...state.cartArray.slice(idx + 1),
      ];
      return { cartArray };
    });
  };

  toggleProperty = (
    arr: any[],
    id: string,
    propName: string,
    value: string | number
  ) => {
    const idx = arr.findIndex((attribute) => attribute.id === id);
    const newValue = value;
    const item = { ...arr[idx], [propName]: newValue };
    return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)];
  };

  render() {
    const productQuantity = this.state.cartArray.reduce(
      (prev, item) => prev + item.productQuantity,
      0
    );

    return (
      <div className="App">
        <ApolloProvider client={client}>
          <Nav
            changeCategory={this.changeCategory}
            category={this.state.category}
            cartArray={this.state.cartArray}
            currentCurrency={this.state.currentCurrency}
            changeCurrency={this.changeCurrency}
            changeProductQuantity={this.changeProductQuantity}
            setAttributeInCartHandler={this.setAttributeInCartHandler}
          />
          <Router
            cartArray={this.state.cartArray}
            addToCartHandler={this.addToCartHandler}
            category={this.state.category}
            currentCurrency={this.state.currentCurrency}
            changeProductQuantity={this.changeProductQuantity}
            setAttributeInCartHandler={this.setAttributeInCartHandler}
          />
        </ApolloProvider>
      </div>
    );
  }
}
