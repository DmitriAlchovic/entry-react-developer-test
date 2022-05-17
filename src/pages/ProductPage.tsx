import React, { Component, ReactComponentElement } from "react";
import { useParams } from "react-router-dom";
import { GET_PRODUCT } from "../query/product";
import ProductDiscription from "../components/productDiscription";
import { ProductPageProps } from "../interfaces";
import { Query } from "@apollo/client/react/components";

class ProductPage extends Component<ProductPageProps> {
  render() {
    const { currentCurrency, addToCartHandler, cartArray } = this.props;
    const { id } = this.props.params;
    return (
      <div>
        <Query query={GET_PRODUCT} variables={{ id }}>
          {(queryResult: any) => {
            const { data, loading, error } = queryResult;
            if (loading) {
              return <div>...Loading</div>;
            }
            if (data) {
              const { product } = data;
              return (
                <ProductDiscription
                  cartArray={cartArray}
                  product={product}
                  addToCartHandler={addToCartHandler}
                  currentCurrency={currentCurrency}
                ></ProductDiscription>
              );
            }
            return null;
          }}
        </Query>
      </div>
    );
  }
}

export default (props: any) => {
  return <ProductPage {...props} params={useParams()} />;
};
