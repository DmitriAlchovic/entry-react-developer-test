import { Component } from "react";
import EmptyCart from "../../../assets/Empty Cart2.svg";

export interface AddToCartBtnProps{
    productId:string;
    addToCart:Function;
}

export default class AddToCartBtn extends Component<AddToCartBtnProps>{
    render(){
        const {addToCart, productId} = this.props;
        return(<button
                value={productId}
                onClick={(e) => {
                  addToCart(e);
                }}
                className="circleCart"
              >
                <img className="cartIcon" src={EmptyCart} />
              </button>)
    }
}