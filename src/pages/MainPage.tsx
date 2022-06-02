import React, { Component } from 'react';
import { MainPageProps } from '../interfaces';
import './MainPage.css';
import CategoryCardQuery from '../components/categoryCard/categoryCardQuery';
import { useParams } from 'react-router-dom';

class MainPage extends Component<MainPageProps> {

  componentDidMount() {
    const { category } = this.props.params; 
    if (category) {
      this.props.changeCategory(category);
    }
  }

  render() {
    const { currentCategory, currentCurrency, cartArray, addToCartHandler } =
      this.props;
    return (
      <div>
        <p className="categoryName">
          {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}
        </p>
        <CategoryCardQuery
          currentCategory={currentCategory}
          currentCurrency={currentCurrency}
          cartArray={cartArray}
          addToCartHandler={addToCartHandler}
        />
      </div>
    );
  }
}

export default function addParams(props: any) {
  return <MainPage {...props} params={useParams()} />;
}