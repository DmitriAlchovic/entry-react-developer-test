import { Component } from "react";
import { AttributesItemProps } from "../../../../../../../interfaces";
import dropStyle from "./attributesItemsDrop.module.css";
import defaultStyle from "./attributesItems.module.css";

export default class AttributesItems extends Component<AttributesItemProps> {
  render() {
    const {
      items,
      setAttributeInCartHandler,
      attrIdx,
      name,
      productId,
      activeAttributes,
      dropdown
    } = this.props;
    
    const styles = dropdown?dropStyle:defaultStyle; 

    const itemsArr = items.map(({ displayValue, id, value }) => {
      return (
        <button
          onClick={(e) => {
            setAttributeInCartHandler(e, productId);
          }}
          name={name}
          value={displayValue}
          className={
           activeAttributes[attrIdx].displayValue === displayValue
              ? styles.selectedBtn
              : styles.attributeBtn
          }
          key={id}
        >
          {value}
        </button>
      );
    });
    return (
      <div>
        <div className={styles.attributesContainer}>{itemsArr}</div>
      </div>
    );
  }
}
