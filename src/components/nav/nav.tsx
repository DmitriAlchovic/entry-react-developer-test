import { Component } from "react";
import "./nav.css";
import { NavProps } from "../../interfaces";
import CategoriesListQuery from "../categoriesList/";
import CurrencyList from "./currency";
import Dropdown from "./dropdown";
import Cart from "../cart";
import VectorDown from "../../assets/Vector-down.svg";
import VectorUp from "../../assets/Vector-up.svg";
import EmptyCart from "../../assets/Empty Cart.svg";
import Logo from "./logo/logo";

export default class Nav extends Component<NavProps> {
  render() {
    const {
      category,
      currentCurrency,
      changeCurrency,
      changeProductQuantity,
      setAttributeInCartHandler,
      cartArray,
      changeCategory,
    } = this.props;
    const productQuantity = cartArray.reduce(
      (prev, item) => prev + item.productQuantity,
      0
    );
    return (
      <div className="navBar">
        <CategoriesListQuery
          category={category}
          changeCategory={changeCategory}
        />
        <Logo />
        <div className="dropsContainer">
          <Dropdown icon={VectorDown} icon2={VectorUp} icon3={currentCurrency}>
            <CurrencyList
              currentCurrency={currentCurrency}
              changeCurrency={changeCurrency}
            />
          </Dropdown>
          <Dropdown icon={EmptyCart} icon3={productQuantity}>
            <Cart
              productQuantity={productQuantity}
              changeProductQuantity={changeProductQuantity}
              setAttributeInCartHandler={setAttributeInCartHandler}
              currentCurrency={currentCurrency}
              cart={cartArray}
            />
          </Dropdown>
        </div>
      </div>
    );
  }
}
