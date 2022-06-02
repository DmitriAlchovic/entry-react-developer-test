import React, { Component } from 'react';
import logo from '../../../assets/VSF.svg';
import './logo.css';

export default class Logo extends Component {
  render() {
    return <img alt="logo" className="logo" src={logo} />;
  }
}
