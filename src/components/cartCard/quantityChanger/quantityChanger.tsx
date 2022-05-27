import {Component} from "react";
import dropStyle from "./quantityChangerDrop.module.css";
import defaultStyle from "./quantityChanger.module.css";

export interface QuantityChangerProps {
    changeProductQuantity:Function;
    id:string;
    productQuantity:number;
    isDropdown:boolean;
}

export default class QuantityChanger extends Component<QuantityChangerProps>{
    render(){
        const {changeProductQuantity, id, productQuantity, isDropdown} = this.props;
        const styles = isDropdown?dropStyle:defaultStyle;
        return(<div className={styles.quantityChanger}>
            <button
              className={styles.changeQuantityBtn}
              onClick={() => {
                changeProductQuantity(id, productQuantity + 1);
              }}
            >
              +
            </button>
            <p className={styles.productQuantity}>{productQuantity}</p>
            <button
              className={styles.changeQuantityBtn}
              onClick={() => {
                changeProductQuantity(id, productQuantity - 1);
              }}
            >
              -
            </button>
          </div>)
    }
}