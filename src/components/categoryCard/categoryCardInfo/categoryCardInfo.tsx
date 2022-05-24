import { Component } from "react";
import { Link } from "react-router-dom";
import "./categoryCardInfo.css";

export interface CategoryCardInfoProps {
    productId:string;
    inStock:boolean;
    img:string;
    productName:string;
    currentCurrency:string;
    productPrice:number;
}

export default class CategoryCardInfo extends Component<CategoryCardInfoProps> {
    render(){
        const {productId, inStock, img, productName, currentCurrency, productPrice}= this.props;
        return(<Link className="link" to={`/product/${productId}`}>
              <div className="card" >
                <div className="con">
                  {!inStock && <p className="stock">OUT OF STOCK</p>}
                  <div className="imgSvg">
                    <img
                      className={inStock ? "productImg" : "productImgOut"}
                      src={img}
                    />
                  </div>
                </div>
                <p className="productNameCategory">{productName}</p>
                <p className="productPriceCategory">
                  <strong>
                    {currentCurrency}
                    {productPrice}
                  </strong>
                </p>
              </div>
            </Link>)
    }
}