import React, { Component } from 'react';
import dropStyle from './quantityChangerDrop.module.css';
import defaultStyle from './quantityChanger.module.css';
import { QuantityChangerProps } from '../../../interfaces';


export default class QuantityChanger extends Component<QuantityChangerProps> {
  render() {
    const { changeProductQuantity, inCartId, productQuantity, isDropdown } =
      this.props;
    const styles = isDropdown ? dropStyle : defaultStyle;
    return (
      <div className={styles.quantityChanger}>
        <button
          className={styles.changeQuantityBtn}
          onClick={() => {
            changeProductQuantity(inCartId, productQuantity + 1);
          }}
        >
          +
        </button>
        <p className={styles.productQuantity}>{productQuantity}</p>
        <button
          className={styles.changeQuantityBtn}
          onClick={() => {
            changeProductQuantity(inCartId, productQuantity - 1);
          }}
        >
          -
        </button>
      </div>
    );
  }
}
