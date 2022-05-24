import { Component } from "react";
import { ProductAttributesProps } from "../../../../../interfaces";
import AttributesColorItem from "./attributesItems/attributesColorItems/attributesColorItems";
import AttributesItems from "./attributesItems/attributesItems/attributesItems";
import dropStyle from "./productAttributesDrop.module.css";
import defaultStyle from "./productAttributes.module.css";

export default class ProductAttributes extends Component<ProductAttributesProps> {
  render() {
    const {
      attributes,
      setAttributeInCartHandler,
      productId,
      activeAttributes,
      dropdown,
    } = this.props;
    const styles = dropdown?dropStyle:defaultStyle;
    
    const attributesArr = attributes.map(({ id, name, items }) => {
      const attrIdx = activeAttributes.findIndex(
        (item: any) => item.id === id
      );
      if (id === "Color") {
        return (
          <div className={styles.attributeName} key={id}>
            <p>{name.toUpperCase()}:</p>
            <AttributesColorItem
              dropdown={dropdown}
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
            dropdown={dropdown}
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
