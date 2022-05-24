import { Component } from "react";
import { AddToCartBtnProps } from "../../../interfaces";
import "./addToCartBtn.css";



export default class AddToCartBtn extends Component<AddToCartBtnProps> {
    render(){
        const {addToCartHandler, attributes, prices, productId} = this.props;
        return(
        <button
        onClick={(e: any) => {
          addToCartHandler(e.target.value, attributes, prices);
        }}
        value={productId}
        className="toCartBtn"
      >
        ADD TO CART
      </button>)
    }
}