import React, { Component } from "react";
import "./currencySwitcher.css";
import { CurrencySwitcherProps } from "../../interfaces";

export default class CurrencySwitcher extends Component<CurrencySwitcherProps> {
  state = {
    open: false,
  };

  render() {
    const { currencies, changeCurrency } = this.props;

    const currenciesList = currencies.map(({ symbol, label }) => {
      return (
        <button
          value={symbol}
          onClick={(e) => {
            changeCurrency(e);
            this.setState({ open: false });
          }}
          className="menu-item"
          key={label}
        >
          {symbol} {label}
        </button>
      );
    });
    return <div className="switcherContainer">{currenciesList}</div>;
  }
}
