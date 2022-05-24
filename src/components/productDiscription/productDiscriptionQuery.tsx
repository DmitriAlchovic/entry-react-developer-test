import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { GET_PRODUCT } from "../../query/product";
import ProductDiscription from "./productDiscription";
import { ProductDiscriptionQueryProps } from "../../interfaces";

export default class ProductDiscriptionQuery extends Component<ProductDiscriptionQueryProps> {
  render() {
    const { productId, cartArray, addToCartHandler, currentCurrency } =
      this.props;
    return (
      <Query query={GET_PRODUCT} variables={{ id:productId }}>
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
          if (error) {
            console.log(error);

            return <div>Error</div>;
          }
          return null;
        }}
      </Query>
    );
  }
}
