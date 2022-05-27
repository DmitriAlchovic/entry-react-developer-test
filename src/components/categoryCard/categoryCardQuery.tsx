import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { GET_PRODUCT_INFO } from "../../query/productInfo";
import CategoryCard from "./categoryCard";
import { CategoryCardQueryProps } from "../../interfaces";




export default class CategoryCardQuery extends Component<CategoryCardQueryProps> {
    render(){
        const {category, addToCartHandler, currentCurrency, cartArray} = this.props;
        return(<Query query={GET_PRODUCT_INFO} variables={{ category }}>
          {(queryResult: any) => {
            const { data, loading, error } = queryResult;
            if (loading) {
              return <div>...Loading</div>;
            }
            if (data) {
              const { category } = data;
              return (
                <CategoryCard
                  addToCartHandler={addToCartHandler}
                  cartArray={cartArray}
                  category={category}
                  currentCurrency={currentCurrency}
                ></CategoryCard>
              );
            }
            if(error){
                return (<div>Error</div>)
            }
            return null;
          }}
        </Query>)
    }
}