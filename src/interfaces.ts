import { DocumentNode } from 'graphql';
import React from 'react';

export interface SliderState {
  galleryIndex: number;
}
export interface SliderProps {
  gallery: string[];
}
export interface CartPageProps {
  setAttributeInCartHandler: Function;
  changeProductQuantity: Function;
  currentCurrency: string;
  cart: Cart[];
}

export interface CartPageState {
  prices: number[];
}
export interface CartCardProps {
  inCartId:number;
  setAttributeInCartHandler: Function;
  changeProductQuantity: Function;
  product: Product;
  currentCurrency: string;
  cart: Cart[];
  isDropdown: boolean;
}
export interface CartCardState {
  productQuantity: number;
}
export interface MinicartProps {
  setAttributeInCartHandler: Function;
  changeProductQuantity: Function;
  currentCurrency: string;
  cart: Cart[];
  productQuantity: number;
  toggleOverlay:Function;
}
export interface DropdownProps {
  children: React.ReactChild | React.ReactNode;
  icon: string;
  icon2?: string;
  icon3?: string | number;
  hasOverlay?:boolean;
  toggleOverlay?:Function;
}

export interface DropdownDisplayProps {
  icon?: string;
  open: boolean;
  toggleOpen: Function;
  children: React.ReactNode;
}

export interface GalleryProps {
  gallery: string[];
  inStock: boolean;
}

export interface MainPageProps {
  params:any;
  changeCategory:Function;
  addToCartHandler: Function;
  cartArray: Cart[];
  currentCategory: string;
  currentCurrency: string;
}

export interface ProductPageProps {
  cartArray: Cart[];
  params: any;
  currentCurrency: string;
  addToCartHandler: Function;
}

export interface AppQueryProps extends React.PropsWithChildren<any> {
  query: DocumentNode;
  variables?: object;
  children: any;
}

export interface ProductDiscriptionProps {
  cartArray: Cart[];
  product: Product;
  currentCurrency: string;
  addToCartHandler: Function;
}

export interface Product {
  name: string;
  id: string;
  gallery: string[];
  brand: string;
  description: string;
  attributes: Attribute[];
  inStock: boolean;
  prices: Price[];
}

export interface Attribute {
  id: string;
  name: string;
  type: string;
  items: Items[];
}

export interface Items {
  displayValue: string;
  id: string;
  value: string;
}

export interface CurrencySwitcherProps {
  currencies: Currency[];
  changeCurrency: Function;
  currentCurrency: string;
}

export interface Currency {
  label: string;
  symbol: string;
}

export interface CategoryCardProps {
  addToCartHandler: Function;
  cartArray: Cart[];
  category: Category;
  currentCurrency: string;
}

export interface Category {
  products: Product[];
  name: string;
}

export interface Price {
  amount: number;
  currency: Currency;
}

export interface AppState {
  currentCurrency: string;
  currentCategory: string;
  cartArray: Cart[];
  hasOverlay:boolean;
}

export interface Cart {
  id:number;
  productId: string;
  attributes: CartAttribute[];
  productQuantity: number;
  prices: Price[];
}

export interface CartAttribute {
  id: string;
  displayValue: string;
}

export interface Attrs {
  id: string;
  displayValue: string;
}

export interface ProductDiscriptionState {
  attributes: Attrs[] | any;
}

export interface RouterComponentProps {
  changeCategory:Function;
  cartArray: Cart[];
  addToCartHandler: Function;
  currentCategory: string;
  currentCurrency: string;
  changeProductQuantity: Function;
  setAttributeInCartHandler: Function;
}

export interface NavProps {
  currentCategory: string;
  currentCurrency: string;
  changeCurrency: Function;
  changeProductQuantity: Function;
  setAttributeInCartHandler: Function;
  changeCategory: Function;
  cartArray: Cart[];
  hasOverlay:boolean;
  toggleOverlay:Function;
}

export interface CurrencyListQueryProps {
  currentCurrency: string;
  changeCurrency: Function;
}

export interface CartQueryProps {
  id: number;
  productId:string;
  isDropdown: boolean;
  changeProductQuantity: Function;
  cart: Cart[];
  setAttributeInCartHandler: Function;
  currentCurrency: string;
}

export interface MinicartFooterProps {
  currentCurrency: string;
  totalSum: number;
  toggleOverlay:Function;
}

export interface CartHeaderProps {
  productQuantity: number;
}

export interface CardInfoProps {
  brand: string;
  name: string;
  currentCurrency: string;
  price: number;
  inCartId: number;
  attributes: Attribute[];
  cart: Cart[];
  cartIdx: number;
  setAttributeInCartHandler: Function;
  isDropdown: boolean;
}

export interface ProductAttributesProps {
  attributes: Attribute[];
  activeAttributes: CartAttribute[];
  setAttributeInCartHandler: Function;
  isDropdown: boolean;
  productId: number | string;
}

export interface AttributesItemProps {
  items: Items[];
  setAttributeInCartHandler: Function;
  attrIdx: number;
  activeAttributes: CartAttribute[];
  name: string;
  productId: string | number;
  isDropdown: boolean;
}

export interface ProductNamePriceProps {
  brand: string;
  name: string;
  currentCurrency: string;
  price: number;
  isDropdown: boolean;
}

export interface CategoryCardQueryProps {
  currentCategory: string;
  addToCartHandler: Function;
  cartArray: Cart[];
  currentCurrency: string;
}

export interface ProductDiscriptionQueryProps {
  productId: string;
  cartArray: Cart[];
  addToCartHandler: Function;
  currentCurrency: string;
}

export interface AddToCartBtnProps {
  addToCartHandler: Function;
  attributes: CartAttribute[];
  prices: Price[];
  productId: string;
}

export interface CategoriesListProps {
  categories: Category[];
  changeCategory: Function;
  currentCategory: string;
}

export interface ProductPriceProps {
  currentCurrency: string;
  price: number;
}

export interface DescriptionProps {
  description: string;
}

export interface BrandPropductNameProps {
  brand: string;
  productName: string;
}
export interface CategoriesListQueryProps {
  currentCategory: string;
  changeCategory: Function;
}

export interface AddToCartCircleBtnProps {
  productId: string;
  addToCart: Function;
}

export interface DropdownBtnProps {
  icon: string;
  icon2?: string;
  icon3?: string | number;
  toggleOpen: Function;
  open: boolean;
}

export interface QuantityChangerProps {
  changeProductQuantity: Function;
  inCartId: number;
  productQuantity: number;
  isDropdown: boolean;
}