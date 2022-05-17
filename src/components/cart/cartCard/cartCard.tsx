import React, { Component } from "react";
import {
  CartCardProps,
} from "../../../interfaces";
import Slider from "../../slider";
import cartPageStyles from "./cartPageCard.module.css";
import cartDorodown from "./cartCard.module.css";

export default class CartCard extends Component<CartCardProps> {
  render() {
    const {
      product,
      currentCurrency,
      setAttributeInCartHandler,
      cart,
      changeProductQuantity,
      dropdown,
    } = this.props;

    const styles = dropdown ? cartDorodown : cartPageStyles;
    const { prices, attributes, gallery, id } = product;
    const price = prices.filter(
      ({ currency }) => currency.symbol === currentCurrency
    );
    const idx = cart.findIndex((item: any) => item.id === id);
    const productQuantity = cart[idx].productQuantity;

    const attributesArr = attributes.map(({ id, name, items }, index) => {
      const attrIdx = cart[idx].attributes.findIndex(
        (item: any) => item.id === id
      );
      if (id === "Color") {
        const itemsArr = items.map(({ displayValue, value, id }) => {
          return (
            <div
              key={id}
              className={
                cart[idx].attributes[attrIdx].displayValue === displayValue
                  ? styles.colorsSelectedBtn
                  : styles.colorBtnContainer
              }
            >
              <button
                onClick={(e) => {
                  setAttributeInCartHandler(e, product.id);
                }}
                name={name}
                value={displayValue}
                className={styles.colorsBtn}
                style={{ backgroundColor: `${value}` }}
              ></button>
            </div>
          );
        });
        return (
          <div className={styles.attributeName} key={id}>
            <p>{name.toUpperCase()}:</p>
            <div className={styles.colorsContainer}>{itemsArr}</div>
          </div>
        );
      }

      const itemsArr = items.map(({ displayValue, id, value }) => {
        console.log(attrIdx);

        return (
          <button
            onClick={(e) => {
              setAttributeInCartHandler(e, product.id);
            }}
            name={name}
            value={displayValue}
            className={
              cart[idx].attributes[attrIdx].displayValue === displayValue
                ? styles.selectedBtn
                : styles.attributeBtn
            }
            key={id}
          >
            {value}
          </button>
        );
      });
      return (
        <div key={id}>
          <p className={styles.attributeName}>{name.toUpperCase()}:</p>
          <div className={styles.attributesContainer}>{itemsArr}</div>
        </div>
      );
    });
    return (
      <div className={styles.cartCard}>
        <div className={styles.infoContainer}>
          <p className={styles.brandName}>{product.brand}</p>
          <p className={styles.productName}>{product.name}</p>
          <p className={styles.productPrice}>
            {currentCurrency}
            {price[0].amount}
          </p>
          {attributesArr}
        </div>
        <div className={styles.cartRight}>
          <div className={styles.quantityChanger}>
            <button
              className={styles.changeQuantityBtn}
              onClick={() => {
                changeProductQuantity(product.id, productQuantity + 1);
              }}
            >
              +
            </button>
            <p className={styles.productQuantity}>{productQuantity}</p>
            <button
              className={styles.changeQuantityBtn}
              onClick={() => {
                changeProductQuantity(product.id, productQuantity - 1);
              }}
            >
              -
            </button>
          </div>
          <div className={styles.sliderContainer}>
            <Slider gallery={gallery}></Slider>
          </div>
        </div>
      </div>
    );
  }
}
