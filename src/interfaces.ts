import { DocumentNode } from "graphql";
import React from "react";

export interface SliderState{
  galleryIndex:number;
}
export interface SliderProps{
  gallery:string[];
}
export interface CartPageProps{
  productQuantity:number;
  setAttributeInCartHandler:Function;
  changeProductQuantity:Function;
  currentCurrency:string;
  cart:Cart[];
}

export interface CartPageState{
  prices:number[];
}
export interface CartCardProps{
  setAttributeInCartHandler:Function;
  changeProductQuantity:Function;
  product: Product;
  currentCurrency:string;
  cart:Cart[];
  dropdown:boolean;
}
export interface CartCardState{
  productQuantity:number;
}
export interface CartProps{
  setAttributeInCartHandler:Function;
  changeProductQuantity:Function;
  currentCurrency:string;
  cart:Cart[];
  productQuantity:number;
}
export interface DropdownProps {
  children:React.ReactChild|React.ReactNode;
  icon:string;
  icon2?:string;
  icon3?:string|number;
}
export interface GalleryProps {
    gallery:string[];
}

export interface MainPageProps {
  addToCartHandler:Function;
  cartArray:Cart[]
  category: string;
  currentCurrency: string;
}

export interface ProductPageProps {
    cartArray:Cart[];
    params:any;
    currentCurrency:string;
    addToCartHandler:Function;
}

export interface AppQueryProps extends React.PropsWithChildren<any> {
  query: DocumentNode;
  variables?:object;
  children: any;
}

export interface ProductDiscriptionProps {
  cartArray:Cart[];
  product: Product;
  currentCurrency:string;
  addToCartHandler:Function;
}

export interface Product {
  name: string;
  id: string;
  gallery: string[];
  brand: string;
  description: string;
  attributes:Attribute[];
  inStock:boolean;
  prices:Price[];
}

export interface Attribute {
  id:string;
  name:string;
  type:string;
  items:Items[]
}

export interface Items{
  displayValue:string;
  id:string;
  value:string;
}

export interface NavProps extends React.PropsWithChildren<any> {
  children:any;
}

export interface CurrencySwitcherProps {
  currencies: Currency[];
  changeCurrency:Function;
  currentCurrency:string;
}

export interface Currency {
  label: string;
  symbol: string;
}

export interface CategoryCardProps {
  addToCartHandler:Function;
  cartArray:Cart[];
  category: Category;
  currentCurrency:string;
}

export interface Category {
  products: Product[];
}

export interface Price {
  amount:number;
  currency:Currency;
}

export interface AppState{
  currentCurency:string;
  category:string;
  cartArray:Cart[];
}

export interface Cart {
  id:string;
  attributes:CartAttribute[];
  productQuantity:number;
  prices:Price[];
}

export interface CartAttribute {
  id:string;
  displayValue:string;
}

export interface Attrs{
  id:string;
  displayValue:string;

}

export interface ProductDiscriptionState{
  attributes:Attrs[]|any;
}