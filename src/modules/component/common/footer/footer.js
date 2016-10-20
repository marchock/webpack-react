import React, { Component } from 'react';

export default class Footer extends Component {

  render() {
    return (
      <footer>{this.props.footerMessage}</footer>
    );
  }
}