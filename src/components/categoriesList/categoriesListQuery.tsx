import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { GET_ALL_CATEGORIES } from "../../query/categories";
import CategoriesList from "./categoriesList";

export interface categoriesListQueryProps {
  category: string;
  changeCategory: Function;
}

export default class CategotyQuery extends Component<categoriesListQueryProps> {
  render() {
    const { category, changeCategory } = this.props;
    return (
      <Query query={GET_ALL_CATEGORIES}>
        {(queryResult: any) => {
          const { data, loading, error } = queryResult;
          if (loading) {
            return <div>...Loading</div>;
          }
          if (data) {
            const { categories } = data;
            return (
              <CategoriesList
                category={category}
                categories={categories}
                changeCategory={changeCategory}
              ></CategoriesList>
            );
          }
          return null;
        }}
      </Query>
    );
  }
}
