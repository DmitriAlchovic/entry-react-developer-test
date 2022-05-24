import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "../components/nav";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

describe("Nav display tests", () => {
  it("renders Nav", () => {
    const { container } = render(
      <ApolloProvider client={client}>
        <Nav
          category="categry"
          currentCurrency="$"
          setAttributeInCartHandler={() => {}}
          cartArray={[]}
          changeCurrency={() => {}}
          changeProductQuantity={() => {}}
          changeCategory={() => {}}
        />
      </ApolloProvider>
    );
    const nav = container.getElementsByClassName("navBar");
    expect(nav.length).toBe(1);
  });
});
