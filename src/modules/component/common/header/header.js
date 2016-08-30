import React, { Component } from 'react';

export default class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>{this.props.titleMessage}</header>
        );
    }
}
Header.propTypes = { titleMessage: React.PropTypes.string.isRequired };
Header.defaultProps = { titleMessage: '' };