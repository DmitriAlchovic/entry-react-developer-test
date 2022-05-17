import React, { Component } from "react";
import "./categoryCard.css";
import { Link } from "react-router-dom";
import { CategoryCardProps } from "../../interfaces";
import EmptyCart from "../../assets/Empty Cart2.svg";

export default class CategoryCard extends Component<CategoryCardProps> {
  state = {
    cartCandidates: [],
  };

  componentDidMount() {
    const { products } = this.props.category;
    const cartCandidates = products.map((item) => {
      const id = item.id;
      const prices = item.prices;
      const attributes = item.attributes.map(({ id, items }) => {
        const displayValue = items[0].displayValue;
        return { id, displayValue };
      });

      return { id, prices, attributes };
    });

    this.setState({ cartCandidates: cartCandidates });
  }

  addToCart = (e: any) => {
    const idx = this.state.cartCandidates.findIndex(
      (item: any) => item.id === e.target.value
    );
    const candidate: any = this.state.cartCandidates[idx];
    console.log(candidate, "CAN");

    this.props.addToCartHandler(
      candidate.id,
      candidate.attributes,
      candidate.prices
    );
  };

  render() {
    const { category, currentCurrency, cartArray } = this.props;
    const { products } = category;
    const cardsArray = products.map(
      ({ gallery, inStock, name, id, prices, attributes }, index) => {
        const inCart = cartArray.find((item) => item.id === id);
        const price = prices.filter(
          ({ currency }) => currency.symbol === currentCurrency
        );

        return (
          <div key={index} className="cardContainer">
            <Link className="link" to={`/product/${id}`}>
              <div className="card" key={id}>
                <div className="con">
                  {!inStock && <p className="stock">OUT OF STOCK</p>}
                  <div className="imgSvg">
                    <img
                      className={inStock ? "productImg" : "productImgOut"}
                      src={gallery[0]}
                    />
                  </div>
                </div>
                <p className="productNameCategory">{name}</p>
                <p className="productPriceCategory">
                  <strong>
                    {currentCurrency}
                    {price[0].amount}
                  </strong>
                </p>
              </div>
            </Link>
            {inStock && !inCart && (
              <button
                value={id}
                onClick={(e) => {
                  this.addToCart(e);
                }}
                className="circleCart"
              >
                <img className="cartIcon" src={EmptyCart} />
              </button>
            )}
          </div>
        );
      }
    );
    return <div className="category">{cardsArray}</div>;
  }
}
