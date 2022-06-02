import React, { Component } from 'react';
import './nav.css';
import { NavProps } from '../../interfaces';
import CategoriesListQuery from '../categoriesList/';
import CurrencySwitcher from './currencySwitcher';
import Dropdown from './dropdown';
import VectorDown from '../../assets/Vector-down.svg';
import VectorUp from '../../assets/Vector-up.svg';
import EmptyCart from '../../assets/Empty Cart.svg';
import Logo from './logo/logo';
import Minicart from './minicart';

export default class Nav extends Component<NavProps> {
  render() {
    const {
      currentCategory,
      currentCurrency,
      changeCurrency,
      changeProductQuantity,
      setAttributeInCartHandler,
      cartArray,
      changeCategory,
      hasOverlay,
      toggleOverlay,
    } = this.props;
    const productQuantity = cartArray.reduce(
      (prev, item) => prev + item.productQuantity, 0);
    return (
      <div className="navBar">
        <CategoriesListQuery
          currentCategory={currentCategory}
          changeCategory={changeCategory}
        />
        <Logo />
        <div className="dropsContainer">
          <Dropdown icon={VectorDown} icon2={VectorUp} icon3={currentCurrency}>
            <CurrencySwitcher
              currentCurrency={currentCurrency}
              changeCurrency={changeCurrency}
            />
          </Dropdown>
          <Dropdown icon={EmptyCart} icon3={productQuantity} hasOverlay={hasOverlay} toggleOverlay={toggleOverlay}>
            <Minicart
              productQuantity={productQuantity}
              changeProductQuantity={changeProductQuantity}
              setAttributeInCartHandler={setAttributeInCartHandler}
              currentCurrency={currentCurrency}
              cart={cartArray}
              toggleOverlay={toggleOverlay}
            />
          </Dropdown>
        </div>
      </div>
    );
  }
}
