import React, { Component } from 'react';
import { ProductNamePriceProps } from '../../../../interfaces';
import dropStyle from './productNamePriceDrop.module.css';
import defaultStyle from './productNamePrice.module.css';

export default class ProductNamePrice extends Component<ProductNamePriceProps> {
  render() {
    const { brand, name, currentCurrency, price, isDropdown } = this.props;
    const styles = isDropdown ? dropStyle : defaultStyle;
    return (
      <div>
        <p className={styles.cartBrandName}>{brand}</p>
        <p className={styles.cartProductName}>{name}</p>
        <p className={styles.cartProductPrice}>
          {currentCurrency}
          {price}
        </p>
      </div>
    );
  }
}
