import React, { Component, ReactEventHandler } from "react";
import { Link } from "react-router-dom";
import "./categoryList.css";

interface CategoriesListProps {
  categories: Category[];
  changeCategory: Function;
  category: string;
}

interface Category {
  name: string;
}

export default class CategoriesList extends Component<CategoriesListProps> {
  render() {
    const { categories, changeCategory } = this.props;

    const categoryList = categories.map(({ name }) => {
      return (
        <button
          key={name}
          value={name}
          onClick={(event: any) => {
            changeCategory(event.target.value);
          }}
          className={
            name === this.props.category ? "selectedCategoryBtn" : "btn"
          }
        >
          {name.toUpperCase()}
        </button>
      );
    });
    return (
      <div className="categoriesContainer">
        <Link to={"/"}>{categoryList}</Link>
      </div>
    );
  }
}
