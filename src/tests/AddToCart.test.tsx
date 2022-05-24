import React from "react";
import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import AddToCartBtn from "../components/productDiscription/addToCartBtn";
import AddToCartBtn2 from "../components/categoryCard/addToCartBtn"

describe("AddToCart btn display tests",()=>{
    it("renders addToCartBtn in ProductPage",()=>{
        render (<AddToCartBtn addToCartHandler={()=>{}} prices={[]} attributes={[]} productId="id" />)
        const btn = screen.getByText(/Add to cart/i);
        expect(btn).toBeInTheDocument();
    })
    it("renders addToCartBtn in CategoryCard",()=>{
       const {container} =  render (<AddToCartBtn2 addToCart={()=>{}} productId={"id"}  />)
        const btn = container.getElementsByClassName("circleCart");
        expect(btn.length).toBe(1);
    })
})