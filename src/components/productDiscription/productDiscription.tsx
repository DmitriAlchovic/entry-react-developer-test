import React, { Component } from "react";
import "./productDiscription.css";
import { ProductDiscriptionProps } from "../../interfaces";
import Gallery from "../gallery";
import { ProductDiscriptionState } from "../../interfaces";
import { Attrs } from "../../interfaces";

export default class ProductDiscription extends Component<
  ProductDiscriptionProps,
  ProductDiscriptionState
> {
  state = {
    attributes: [],
  };

  componentDidMount() {
    const attributesArr = this.props.product.attributes;
    const attrsToSet = attributesArr.map(({ id, items }) => {
      const displayValue = items[0].displayValue;
      return { id, displayValue };
    });

    this.setAttributesArr(attrsToSet);
  }

  setAttributeHandler = (event: any) => {
    this.setState((state) => {
      const attributes = this.toggleProperty(
        state.attributes,
        event.target.name,
        "displayValue",
        event.target.value
      );
      return { attributes };
    });
  };

  toggleProperty = (
    arr: any[],
    id: string,
    propName: string,
    value: string
  ) => {
    const idx = arr.findIndex((attribute) => attribute.id === id);
    const newValue = value;
    const item = { ...arr[idx], [propName]: newValue };
    return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)];
  };

  setAttributesArr = (attrsToSet: Attrs[]) => {
    this.setState((state) => {
      const attributes = attrsToSet;
      return { attributes: attributes };
    });
  };

  render() {
    const { product, currentCurrency, addToCartHandler, cartArray } =
      this.props;
    const {
      gallery,
      brand,
      description,
      name,
      attributes,
      prices,
      id,
      inStock,
    } = product;
    const price = prices.filter(
      ({ currency }) => currency.symbol === currentCurrency
    );

    const inCart = cartArray.find((item) => item.id === id);
    const addToCart = (
      <button
        onClick={(e: any) => {
          addToCartHandler(e.target.value, this.state.attributes, prices);
        }}
        value={id}
        className="toCartBtn"
      >
        ADD TO CART
      </button>
    );
    const attributesArr = attributes.map(({ id, name, items }, index) => {
      const attributeName = name;
      const toCompare: any = this.state.attributes;
      if (id === "Color" && this.state.attributes[index]) {
        const itemsArr = items.map(({ displayValue, value, id }) => {
          return (
            <div
              className={
                displayValue === toCompare[index].displayValue
                  ? "colorsSelectedBtn"
                  : "colorsBtnContainer"
              }
            >
              <button
                className="colorsBtn"
                name={attributeName}
                onClick={(e) => {
                  this.setAttributeHandler(e);
                }}
                value={displayValue}
                style={{ backgroundColor: `${value}` }}
                key={id}
              ></button>
            </div>
          );
        });
        return (
          <div key={id}>
            <p className="attributeName">{name.toUpperCase()}:</p>
            <div className="attributesContainer">{itemsArr}</div>
          </div>
        );
      }
      if (this.state.attributes[index]) {
        const itemsArr = items.map(({ displayValue, value, id }) => {
          return (
            <button
              name={attributeName}
              value={displayValue}
              onClick={(e) => {
                this.setAttributeHandler(e);
              }}
              className={
                displayValue === toCompare[index].displayValue
                  ? "selectedBtn"
                  : "attributeBtn"
              }
              key={id}
            >
              {value}
            </button>
          );
        });
        return (
          <div key={id}>
            <p className="attributeName">{name.toLocaleUpperCase()}:</p>
            <div className="attributesContainer">{itemsArr}</div>
          </div>
        );
      }
    });

    return (
      <div className="productDisplayContainer">
        <Gallery gallery={gallery}></Gallery>
        <div className="info">
          <p className="brandName">{brand}</p>
          <p className="productName">{name}</p>
          {attributesArr}
          <p className="productPriceSign">PRICE:</p>
          <p className="productPrice">
            {currentCurrency}
            {price[0].amount}
          </p>
          <div className="addToCartContainer">
            {!inCart && inStock && addToCart}
          </div>
          <div
            className="discriptionOfProduct"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
      </div>
    );
  }
}
