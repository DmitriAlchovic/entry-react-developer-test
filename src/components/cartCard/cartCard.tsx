import { Component } from "react";
import { CartCardProps } from "../../interfaces";
import Slider from "./slider";
import "./cartCard.css";
import CartCardInfo from "./cartCardInfo";
import QuantityChanger from "./quantityChanger";

export default class CartCard extends Component<CartCardProps> {
  render() {
    const {
      isDropdown,
      product,
      currentCurrency,
      setAttributeInCartHandler,
      cart,
      changeProductQuantity,
    } = this.props;

    const { prices, attributes, gallery, id, brand, name } = product;
    const price = prices.filter(
      ({ currency }) => currency.symbol === currentCurrency
    );
    const cartIdx = cart.findIndex((item: any) => item.id === id);
    const productQuantity = cart[cartIdx].productQuantity;

    return (
      <div className={"cartCard"}>
        <CartCardInfo
          brand={brand}
          name={name}
          price={price[0].amount}
          currentCurrency={currentCurrency}
          attributes={attributes}
          productId={id}
          cart={cart}
          cartIdx={cartIdx}
          setAttributeInCartHandler={setAttributeInCartHandler}
          isDropdown={isDropdown}
        />
        <div className={"cartRight"}>
          <QuantityChanger
            isDropdown={isDropdown}
            changeProductQuantity={changeProductQuantity}
            id={product.id}
            productQuantity={productQuantity}
          />
          <div className={"sliderContainer"}>
            <Slider gallery={gallery}></Slider>
          </div>
        </div>
      </div>
    );
  }
}
