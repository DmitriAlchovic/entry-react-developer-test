import React, { Component } from 'react';
import { CartCardProps } from '../../interfaces';
import Slider from './slider';
import defaultStyle from './cartCard.module.css';
import dropStyle from './cartCardDrop.module.css';
import CartCardInfo from './cartCardInfo';
import QuantityChanger from './quantityChanger';

export default class CartCard extends Component<CartCardProps> {
  render() {
    const {
      inCartId,
      isDropdown,
      product,
      currentCurrency,
      setAttributeInCartHandler,
      cart,
      changeProductQuantity,
    } = this.props;
    const styles = isDropdown ? dropStyle : defaultStyle;
    const { prices, attributes, gallery, brand, name } = product;
    const price = prices.filter(
      ({ currency }) => currency.symbol === currentCurrency);
    const cartIdx = cart.findIndex((item: any) => item.id === inCartId);
    const productQuantity = cart[cartIdx].productQuantity;

    return (
      <div className={styles.cartCard}>
        <CartCardInfo
          brand={brand}
          name={name}
          price={price[0].amount}
          currentCurrency={currentCurrency}
          attributes={attributes}
          inCartId={inCartId}
          cart={cart}
          cartIdx={cartIdx}
          setAttributeInCartHandler={setAttributeInCartHandler}
          isDropdown={isDropdown}
        />
        <div className={styles.cartRight}>
          <QuantityChanger
            isDropdown={isDropdown}
            changeProductQuantity={changeProductQuantity}
            inCartId={inCartId}
            productQuantity={productQuantity}
          />
          <div className={styles.sliderContainer}>
            <Slider gallery={gallery}></Slider>
          </div>
        </div>
      </div>
    );
  }
}
