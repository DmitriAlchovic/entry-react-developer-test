import { Component } from "react";
import { MainPageProps } from "../interfaces";
import "./MainPage.css";
import CategoryCardQuery from "../components/categoryCard/categoryCardQuery";

export default class MainPage extends Component<MainPageProps> {
  render() {
    const { category, currentCurrency, cartArray, addToCartHandler } =
      this.props;
    return (
      <div>
        <p className="categoryName">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </p>
        <CategoryCardQuery
          category={category}
          currentCurrency={currentCurrency}
          cartArray={cartArray}
          addToCartHandler={addToCartHandler}
        />
      </div>
    );
  }
}
