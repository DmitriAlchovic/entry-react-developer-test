import React, { Component } from "react";
import { GET_PRODUCT_INFO } from "../query/productInfo";
import CategoryCard from "../components/categoryCard/categoryCard";
import { MainPageProps } from "../interfaces";
import { Query } from "@apollo/client/react/components";
import "./MainPage.css";

export default class MainPage extends Component<MainPageProps> {
  render() {
    const { category, currentCurrency, cartArray, addToCartHandler } = this.props;

    return (
      <div>
        <p className="categoryName">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
        <Query query={GET_PRODUCT_INFO} variables={{ category }}>
          {(queryResult: any) => {
            const { data, loading, error } = queryResult;
            if (loading) {
              return <div>...Loading</div>;
            }
            if (data) {
              const { category } = data;
              return (
                <CategoryCard
                  addToCartHandler={addToCartHandler}
                  cartArray={cartArray}
                  category={category}
                  currentCurrency={currentCurrency}
                ></CategoryCard>
              );
            }
            return null;
          }}
        </Query>
      </div>
    );
  }
}
