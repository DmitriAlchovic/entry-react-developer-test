import React, { Component, MouseEventHandler } from "react";
import Nav from "./components/nav";
import { GET_ALL_CATEGORIES } from "./query/categories";
import { GET_ALL_CURRENCIES } from "./query/currencies";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import CategoriesList from "./components/categoriesList";
import CurrencySwitcher from "./components/currency";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { AppState, Price } from "./interfaces";
import Dropdown from "./components/dropdown";
import Cart from "./components/cart";
import { Query } from "@apollo/client/react/components";
import EmptyCart from "./assets/Empty Cart.svg";
import VecrtorDown from "./assets/Vector-down.svg";
import VectroUp from "./assets/Vector-up.svg";
import Logo from "./assets/VSF.svg";
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
        productQuantity:1,
        prices:[{ __typename: "Price", amount: 844.02, currency: {__typename: "Currency",
        label: "USD",
        symbol: "$"} },
        {__typename: "Price",
amount: 63826.91, currency:{__typename: "Currency", symbol: "₽", label: "RUB"},}
       
      ]
        
      },
    ],
  };

   changeProductQuantity = (id:string,productQuantity:number)=>{
     this.setState((state:AppState)=>{
       if(productQuantity===0){
       const idx = state.cartArray.findIndex((cart)=>cart.id===id)
         const cartArray = [
          ...state.cartArray.slice(0, idx),
          ...state.cartArray.slice(idx + 1)
        ];
        return {cartArray};
       }
      const cartArray = this.toggleProperty(state.cartArray,id,"productQuantity",productQuantity)
      return {cartArray}
    }) 
  };

  changeCurrency = (event: React.ChangeEvent<HTMLButtonElement>) => {
    this.setState({ currentCurrency: event.target.value });
  };

  changeCategory = (newCategory: string) => {
    this.setState({ category: newCategory });
  };

  addToCartHandler = (id:string, attributes:Attr[],prices:Price[]) => {
    this.setState ((state:AppState)=>{
      const productQuantity = 1;
      const product = {id,attributes,productQuantity,prices}
      return {cartArray:[...state.cartArray,product]}
    })
  };

  setAttributeInCartHandler = (event:any, productId:string) =>{
     this.setState((state:AppState) => {
       const idx = state.cartArray.findIndex((cart)=>cart.id===productId)
      const attributes = this.toggleProperty(state.cartArray[idx].attributes, event.target.name, "displayValue" , event.target.value);
      const productQuantity = state.cartArray[idx].productQuantity;
      const prices = state.cartArray[idx].prices;
      const product = {id:productId,attributes,productQuantity,prices}
     const cartArray =  [
      ...state.cartArray.slice(0, idx),
      product,
      ...state.cartArray.slice(idx + 1)
    ];
          return {cartArray} 
    });  
  } 

  toggleProperty = (arr:any[], id:string, propName:string, value:string|number) => {
    const idx = arr.findIndex((attribute) => attribute.id === id);
    const newValue = value;
    const item = { ...arr[idx], [propName]: newValue } ;
    return [
      ...arr.slice(0, idx),
      item,
      ...arr.slice(idx + 1)
    ];
  };  

  render() {
    const productQuantity = this.state.cartArray.reduce((prev,item)=>prev+item.productQuantity,0)
    
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Nav>
            <Query query={GET_ALL_CATEGORIES}>
              {(queryResult: any) => {
                const { data, loading, error } = queryResult;
                if (loading) {
                  return <div>...Loading</div>;
                }
                if (data) {
                  const { categories } = data;
                  return (
                    <CategoriesList
                      category={this.state.category}
                      categories={categories}
                      changeCategory={this.changeCategory}
                    ></CategoriesList>
                  );
                }
                return null;
              }}
            </Query>
              <img className="logo" src={Logo}/>
              <div className="dropsContainer">
            <Dropdown icon={VecrtorDown} icon2={VectroUp} icon3={this.state.currentCurrency} >
              <Query query={GET_ALL_CURRENCIES}>
                {(queryResult: any) => {
                  const { data, loading, error } = queryResult;
                  if (loading) {
                    return <div>...Loading</div>;
                  }
                  if (data) {
                    const { currencies } = data;
                    return (
                      <CurrencySwitcher
                        currencies={currencies}
                        currentCurrency={this.state.currentCurrency}
                        changeCurrency={this.changeCurrency}
                      ></CurrencySwitcher>
                    );
                  }
                  return null;
                }}
              </Query>
            </Dropdown>
            <Dropdown icon={EmptyCart} icon3={productQuantity}>
              <Cart
                productQuantity={productQuantity}
                changeProductQuantity={this.changeProductQuantity}
                setAttributeInCartHandler = {this.setAttributeInCartHandler}
                currentCurrency={this.state.currentCurrency}
                cart={this.state.cartArray}
              ></Cart>
            </Dropdown>
</div>
          </Nav>
          <Routes>
            <Route
              element={
                <MainPage
                  addToCartHandler={this.addToCartHandler}
                  cartArray={this.state.cartArray}
                  category={this.state.category}
                  currentCurrency={this.state.currentCurrency}
                />
              }
              path="/"
            ></Route>
            <Route
              element={
                <ProductPage
                  cartArray = {this.state.cartArray}
                  addToCartHandler={this.addToCartHandler}
                  currentCurrency={this.state.currentCurrency}
                />
              }
              path="/product/:id"
            ></Route>
            <Route
              element={
                <CartPage
                productQuantity={productQuantity} 
                changeProductQuantity={this.changeProductQuantity} 
                setAttributeInCartHandler = {this.setAttributeInCartHandler}
                cart={this.state.cartArray}
                currentCurrency={this.state.currentCurrency}
                />
              }
              path="/cart"
            ></Route>
          </Routes>
        </div>
      </ApolloProvider>
    );
  }
}
