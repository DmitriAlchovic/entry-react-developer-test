import {Component} from "react";
import { Query } from "@apollo/client/react/components";
import { GET_PRODUCT } from "../../query/product";
import CartCard from ".";
import { CartQueryProps } from "../../interfaces";


export default class CartQuery extends Component<CartQueryProps> {
    render(){
        const {id, cart, isDropdown, changeProductQuantity, setAttributeInCartHandler, currentCurrency}= this.props;
        return(
          <Query query={GET_PRODUCT} variables={{ id }}>
            {(queryResult: any) => {
              const { data, loading, error } = queryResult;
              if (loading) {
                return <div>...Loading</div>;
              }
              if (data) {
                const { product } = data;
                return (
                  <CartCard
                    isDropdown={isDropdown}
                    changeProductQuantity={changeProductQuantity}
                    cart={cart}
                    setAttributeInCartHandler={setAttributeInCartHandler}
                    product={product}
                    currentCurrency={currentCurrency}
                  />
                );
              }
              if(error){
                  return(<div>Error</div>)
              }
              return null;
            }}
          </Query>
        )
    }
}