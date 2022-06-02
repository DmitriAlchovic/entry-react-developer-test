import React, { Component } from 'react';
import { GET_ALL_CURRENCIES } from '../../../query/currencies';
import CurrencySwitcher from './currencySwitcher';
import { Query } from '@apollo/client/react/components';
import { CurrencyListQueryProps } from '../../../interfaces';

export default class CurrencyListQuery extends Component<CurrencyListQueryProps> {
  render() {
    const { currentCurrency, changeCurrency } = this.props;
    return (
      <Query query={GET_ALL_CURRENCIES}>
        {(queryResult: any) => {
          const { data, loading, error } = queryResult;
          if (loading) {
            return <div>...Loading</div>;
          }
          if (data) {
            const { currencies } = data;
            return (
              <CurrencySwitcher
                currencies={currencies}
                currentCurrency={currentCurrency}
                changeCurrency={changeCurrency}
              ></CurrencySwitcher>
            );
          }
          if (error) {
            return <div>{error}</div>;
          }
          return null;
        }}
      </Query>
    );
  }
}
