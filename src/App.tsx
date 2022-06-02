import React, { Component } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Nav from './components/nav';
import { AppState, CartAttribute, Price, Cart } from './interfaces';
import AppRouter from './components/appRouter';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    
  },
});

export default class App extends Component<{}, AppState> {
  maxId = 0; //change to uuid generator in future

  state = {
    currentCurrency: '$',
    currentCategory: 'all',
    cartArray: [],
    hasOverlay: false,
  };

  changeProductQuantity = (inCartId: number, productQuantity: number) => {
    this.setState((state: AppState) => {
      if (productQuantity === 0) {
        const idx = state.cartArray.findIndex((cart) => cart.id === inCartId);
        const cartArray = [
          ...state.cartArray.slice(0, idx),
          ...state.cartArray.slice(idx + 1),
        ];
        return { cartArray };
      }
      const cartArray = this.toggleProperty(
        state.cartArray,
        inCartId,
        'productQuantity',
        productQuantity);
      return { cartArray };
    });
  };

  changeCurrency = (event: React.ChangeEvent<HTMLButtonElement>) => {
    this.setState({ currentCurrency: event.target.value });
  };

  changeCategory = (newCategory: string) => {
    this.setState({ currentCategory: newCategory });
  };

  hasSameProperties = (canditate: Cart):Cart=> {
    const sameProduct = this.state.cartArray.filter((item: Cart) => {
      if (item.productId === canditate.productId) {
        const sameAttributes = item.attributes.map((attribute: CartAttribute) =>{
          const attributesMatch =  canditate.attributes.filter(
            ({ id, displayValue }) =>{
              return (id === attribute.id && displayValue === attribute.displayValue);
            });
          return attributesMatch;
        });
        const toCompareLength = sameAttributes.filter((itemArr)=> itemArr.length > 0); 
        
        return (toCompareLength.length === canditate.attributes.length);
      } else { return false; }
    });
    return (sameProduct[0]);
  };

  addToCartHandler = (
    productId: string,
    attributes: CartAttribute[],
    prices: Price[]) => {
    this.setState((state: AppState) => {
      const defaultQuantity = 1;
      const productQuantity = defaultQuantity;
      const id = ++this.maxId;
      const product = { id, productId, attributes, productQuantity, prices };
      const sameProduct = this.hasSameProperties(product);
      if (sameProduct) {
        const cartArray = this.toggleProperty(
          state.cartArray,
          sameProduct.id,
          'productQuantity',
          sameProduct.productQuantity + 1);
        return { cartArray };
      } else {
        return { cartArray: [...state.cartArray, product] };
      }
    });
  };

  setAttributeInCartHandler = (
    event: React.ChangeEvent<HTMLButtonElement>,
    inCartId: number) => {
    const attributeId = event.target.name;

    const value = event.target.value;
    this.setState((state: AppState) => {
      const idx = state.cartArray.findIndex((cart) => cart.id === inCartId);
      const attributes = this.toggleProperty(
        state.cartArray[idx].attributes,
        attributeId,
        'displayValue',
        value);
      const id = inCartId;
      const productQuantity = state.cartArray[idx].productQuantity;
      const prices = state.cartArray[idx].prices;
      const productId = state.cartArray[idx].productId;
      const product = { id, productId, attributes, productQuantity, prices };
      const sameProduct = this.hasSameProperties(product);
      if (sameProduct) {
        const increasedQuantityArray = this.toggleProperty(
          state.cartArray,
          sameProduct.id,
          'productQuantity',
          sameProduct.productQuantity + productQuantity);
        const cartArray = [
          ...increasedQuantityArray.slice(0, idx),
          ...increasedQuantityArray.slice(idx + 1),
        ];
        return { cartArray };
      } else {
        const cartArray = [
          ...state.cartArray.slice(0, idx),
          product,
          ...state.cartArray.slice(idx + 1),
        ];
        return { cartArray };
      }
    });
  };

  toggleProperty = (
    arr: any[],
    id: string | number,
    propName: string,
    value: string | number) => {
    const idx = arr.findIndex((attribute) => attribute.id === id);
    const newValue = value;
    const item = { ...arr[idx], [propName]: newValue };
    return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)];
  };

  toggleOverlay = () => {
    this.setState({ hasOverlay: !this.state.hasOverlay });
  };

  render() {
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <Nav
            changeCategory={this.changeCategory}
            currentCategory={this.state.currentCategory}
            cartArray={this.state.cartArray}
            currentCurrency={this.state.currentCurrency}
            changeCurrency={this.changeCurrency}
            changeProductQuantity={this.changeProductQuantity}
            setAttributeInCartHandler={this.setAttributeInCartHandler}
            hasOverlay={this.state.hasOverlay}
            toggleOverlay={this.toggleOverlay}
          />
          {this.state.hasOverlay && (
            <div className="dropdownBackgroundGrey"></div>
          )}
          <AppRouter
            changeCategory={this.changeCategory}
            cartArray={this.state.cartArray}
            addToCartHandler={this.addToCartHandler}
            currentCategory={this.state.currentCategory}
            currentCurrency={this.state.currentCurrency}
            changeProductQuantity={this.changeProductQuantity}
            setAttributeInCartHandler={this.setAttributeInCartHandler}
          />
        </ApolloProvider>
      </div>
    );
  }
}
