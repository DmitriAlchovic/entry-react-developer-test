import React, { Component } from 'react';
import { Query } from '@apollo/client/react/components';
import { GET_ALL_CATEGORIES } from '../../query/categories';
import CategoriesList from './categoriesList';
import { CategoriesListQueryProps } from '../../interfaces';



export default class CategotyQuery extends Component<CategoriesListQueryProps> {
  render() {
    const { currentCategory, changeCategory } = this.props;
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
                currentCategory={currentCategory}
                categories={categories}
                changeCategory={changeCategory}
              ></CategoriesList>
            );
          }
          if (error) {
            return (<div>Error</div>);
          }
          return null;
        }}
      </Query>
    );
  }
}
