import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from '../components/nav';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

describe('Nav display tests', () => {
  it('renders Nav', () => {
    const { container } = render(
      <ApolloProvider client={client}>
        <Nav
          currentCategory="categry"
          currentCurrency="$"
          setAttributeInCartHandler={() => {}}
          cartArray={[]}
          changeCurrency={() => {}}
          changeProductQuantity={() => {}}
          changeCategory={() => {}}
          hasOverlay={false}
          toggleOverlay={()=>{}}
        />
      </ApolloProvider>);
    const nav = container.getElementsByClassName('navBar');
    expect(nav.length).toBe(1);
  });
});
