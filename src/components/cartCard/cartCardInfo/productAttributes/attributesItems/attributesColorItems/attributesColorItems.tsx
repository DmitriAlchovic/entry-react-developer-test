import { Component } from "react";
import { AttributesItemProps } from "../../../../../../interfaces";
import dropStyle from "./attributesColorItemsDrop.module.css";
import defaultStyle from "./attributesColorItems.module.css";

export default class AttributesColorItem extends Component<AttributesItemProps> {
  render() {
    const {
      items,
      setAttributeInCartHandler,
      attrIdx,
      name,
      productId,
      isDropdown,
      activeAttributes
    } = this.props;
    const styles = isDropdown ? dropStyle : defaultStyle;

    const itemsArr = items.map(({ displayValue, value, id }) => {
      return (
        <div
          key={id}
          className={
            activeAttributes[attrIdx].displayValue === displayValue
              ? styles.colorsSelectedBtn
              : styles.colorBtnContainer
          }
        >
          <button
            onClick={(e) => {
              setAttributeInCartHandler(e, productId);
            }}
            name={name}
            value={displayValue}
            className={styles.colorsBtn}
            style={{ backgroundColor: `${value}` }}
          ></button>
        </div>
      );
    });
    return <div className={styles.colorsContainer}>{itemsArr}</div>;
  }
}
