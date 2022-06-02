import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';
import { RouterComponentProps } from '../../interfaces';

export default class AppRouter extends Component<RouterComponentProps> {
  render() {
    const {
      addToCartHandler,
      cartArray,
      currentCategory,
      currentCurrency,
      changeProductQuantity,
      setAttributeInCartHandler,
      changeCategory,
    } = this.props;
    return (
      <Routes>
        <Route
          element={
            <MainPage
              changeCategory={changeCategory}
              addToCartHandler={addToCartHandler}
              cartArray={cartArray}
              currentCategory={currentCategory}
              currentCurrency={currentCurrency}
            />
          }
          path="/:category"
        ></Route>
        <Route element={<Navigate to={`/${currentCategory}`}/>} path="/"/>
        <Route
          element={
            <ProductPage
              cartArray={cartArray}
              addToCartHandler={addToCartHandler}
              currentCurrency={currentCurrency}
            />
          }
          path="/product/:id"
        ></Route>
        <Route
          element={
            <CartPage
              changeProductQuantity={changeProductQuantity}
              setAttributeInCartHandler={setAttributeInCartHandler}
              cart={cartArray}
              currentCurrency={currentCurrency}
            />
          }
          path="/cart"
        ></Route>
      </Routes>
    );
  }
}
