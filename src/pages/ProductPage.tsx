import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { ProductPageProps } from '../interfaces';
import ProductDiscriptionQuery from '../components/productDiscription/productDiscriptionQuery';

class ProductPage extends Component<ProductPageProps> {
  render() {
    const { currentCurrency, addToCartHandler, cartArray } = this.props;
    const { id } = this.props.params;

    return (
      <ProductDiscriptionQuery
        productId={id}
        cartArray={cartArray}
        currentCurrency={currentCurrency}
        addToCartHandler={addToCartHandler}
      />);
  }
}

export default function addParams(props: any) {
  return <ProductPage {...props} params={useParams()} />;
}
