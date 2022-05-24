import React,{Component} from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import ProductPage from "../../pages/ProductPage";
import CartPage from "../../pages/CartPage";
import { RouterComponentProps } from "../../interfaces";

export default class Router extends Component<RouterComponentProps> {
    render(){
        const {addToCartHandler, cartArray, category, currentCurrency,changeProductQuantity, setAttributeInCartHandler}=this.props;
        return(
        <Routes>
            <Route
              element={
                <MainPage
                  addToCartHandler={addToCartHandler}
                  cartArray={cartArray}
                  category={category}
                  currentCurrency={currentCurrency}
                />
              }
              path="/"
            ></Route>
            <Route
              element={
                <ProductPage
                  cartArray = {cartArray}
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
                setAttributeInCartHandler = {setAttributeInCartHandler}
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