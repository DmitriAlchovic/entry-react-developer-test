import React, { Component } from 'react';
import { ProductAttributesProps } from '../../../../interfaces';
import AttributesColorItem from './attributesItems/attributesColorItems/attributesColorItems';
import AttributesItems from './attributesItems/attributesItems/attributesItems';
import dropStyle from './productAttributesDrop.module.css';
import defaultStyle from './productAttributes.module.css';

export default class ProductAttributes extends Component<ProductAttributesProps> {
  render() {
    const {
      attributes,
      setAttributeInCartHandler,
      productId,
      activeAttributes,
      isDropdown,
    } = this.props;
    const styles = isDropdown ? dropStyle : defaultStyle;

    const attributesArr = attributes.map(({ id, name, items }) => {
      const attrIdx = activeAttributes.findIndex((item: any) => item.id === id);
      if (id === 'Color') {
        return (
          <div className={styles.attributeName} key={id}>
            <p>{name.toUpperCase()}:</p>
            <AttributesColorItem
              isDropdown={isDropdown}
              setAttributeInCartHandler={setAttributeInCartHandler}
              items={items}
              activeAttributes={activeAttributes}
              attrIdx={attrIdx}
              name={name}
              productId={productId}
            />
          </div>
        );
      }
      return (
        <div key={id}>
          <p className={styles.attributeName}>{name.toUpperCase()}:</p>
          <AttributesItems
            isDropdown={isDropdown}
            setAttributeInCartHandler={setAttributeInCartHandler}
            items={items}
            activeAttributes={activeAttributes}
            attrIdx={attrIdx}
            name={name}
            productId={productId}
          />
        </div>
      );
    });
    return <>{attributesArr}</>;
  }
}
