import React, { Component } from 'react';

export default class Message extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div>{this.props.subMessage}</div>
    );
  }
}
Message.propTypes = { subMessage: React.PropTypes.string.isRequired };
Message.defaultProps = { subMessage: '' };