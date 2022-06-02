import React, { Component } from 'react';
import './productDiscription.css';
import { ProductDiscriptionProps } from '../../interfaces';
import Gallery from './gallery';
import { ProductDiscriptionState } from '../../interfaces';
import { Attrs } from '../../interfaces';
import ProductAttributes from '../cartCard/cartCardInfo/productAttributes/productAttributes';
import AddToCartBtn from './addToCartBtn';
import BrandPropductName from './brandProductName';
import ProductPrice from './productPrice';
import Description from './description';

export default class ProductDiscription extends Component<ProductDiscriptionProps, ProductDiscriptionState> {
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
        'displayValue',
        event.target.value);
      return { attributes };
    });
  };

  toggleProperty = (
    arr: any[],
    id: string,
    propName: string,
    value: string,
  ) => {
    const idx = arr.findIndex((attribute) => attribute.id === id);
    const newValue = value;
    const item = { ...arr[idx], [propName]: newValue };
    return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)];
  };

  setAttributesArr = (attrsToSet: Attrs[]) => {
    this.setState(() => {
      const attributes = attrsToSet;
      return { attributes: attributes };
    });
  };

  render() {
    const { product, currentCurrency, addToCartHandler } =
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
      ({ currency }) => currency.symbol === currentCurrency);

    const activeAttributes = this.state.attributes.length;

    return (
      <div className="productDisplayContainer">
        <Gallery gallery={gallery} inStock={inStock}></Gallery>
        <div className="info">
          <BrandPropductName productName={name} brand={brand} />
          {activeAttributes ? (
            <ProductAttributes
              attributes={attributes}
              activeAttributes={this.state.attributes}
              isDropdown={false}
              setAttributeInCartHandler={this.setAttributeHandler}
              productId={id}
            />
          ) : null}
          <ProductPrice
            price={price[0].amount}
            currentCurrency={currentCurrency}
          />
          <div className="addToCartContainer">
            {inStock && (
              <AddToCartBtn
                addToCartHandler={addToCartHandler}
                prices={prices}
                productId={id}
                attributes={this.state.attributes}
              />
            )}
          </div>
          <Description description={description} />
        </div>
      </div>
    );
  }
}
