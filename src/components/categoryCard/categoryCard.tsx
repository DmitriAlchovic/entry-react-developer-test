import { Component } from "react";
import "./categoryCard.css";
import { CategoryCardProps } from "../../interfaces";
import AddToCartBtn from "./addToCartBtn/addToCartBtn";
import CategoryCardInfo from "./categoryCardInfo/categoryCardInfo";

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
      ({ gallery, inStock, name, id, prices }, index) => {
        const inCart = cartArray.find((item) => item.id === id);
        const price = prices.filter(
          ({ currency }) => currency.symbol === currentCurrency
        );

        return (
          <div key={index} className="cardContainer">
            <CategoryCardInfo
              productId={id}
              inStock={inStock}
              img={gallery[0]}
              productName={name}
              currentCurrency={currentCurrency}
              productPrice={price[0].amount}
            />
            {inStock && !inCart && (
              <AddToCartBtn productId={id} addToCart={this.addToCart} />
            )}
          </div>
        );
      }
    );
    return <div className="category">{cardsArray}</div>;
  }
}
