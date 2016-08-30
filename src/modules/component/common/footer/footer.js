import React, { Component } from 'react';

export default class Footer extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
      <footer>{this.props.titleMessage} ------- footer</footer>
    );
  }
}