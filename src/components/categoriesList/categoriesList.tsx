import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './categoryList.css';
import { CategoriesListProps } from '../../interfaces';

export default class CategoriesList extends Component<CategoriesListProps> {
  render() {
    const { categories, changeCategory, currentCategory } = this.props;

    const categoryList = categories.map(({ name }) => {
      return (
        <Link key={name} to={`/${name}`}>
          <button
            value={name}
            onClick={(event: any) => {
              changeCategory(event.target.value);
            }}
            className={name === currentCategory ? 'selectedCategoryBtn' : 'btn'}
          >
            {name.toUpperCase()}
          </button>
        </Link>
      );
    });
    return (
      <div className="categoriesContainer">
       {categoryList}
      </div>
    );
  }
}
