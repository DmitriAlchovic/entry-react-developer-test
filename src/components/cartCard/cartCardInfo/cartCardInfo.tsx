import { Component } from "react";
import ProductNamePrice from "./productNamePrice/ProductNamePriceInfo";
import { CardInfoProps } from "../../../interfaces";
import ProductAttributes from "./productAttributes/productAttributes";
import "./cartCardInfo.css";

export default class CartCardInfo extends Component<CardInfoProps> {
  render() {
    const {
      brand,
      name,
      currentCurrency,
      price,
      attributes,
      cart,
      cartIdx,
      setAttributeInCartHandler,
      productId,
      isDropdown
    } = this.props;

    const activeAttributes = cart[cartIdx].attributes;
    return (
      <div className={"infoContainer"}>
        <ProductNamePrice
          brand={brand}
          name={name}
          currentCurrency={currentCurrency}
          price={price}
          isDropdown={isDropdown}
        />
        <ProductAttributes
          activeAttributes={activeAttributes}
          isDropdown={isDropdown}
          attributes={attributes}
          setAttributeInCartHandler={setAttributeInCartHandler}
          productId={productId}
        />
      </div>
    );
  }
}
