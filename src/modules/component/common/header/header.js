import React, { Component } from 'react';
import Nav from './nav/nav';

export default class Header extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <header>{this.props.titleMessage}
                <Nav />
            </header>
        );
    }
}
// Header.propTypes = { titleMessage: React.PropTypes.string.isRequired };
// Header.defaultProps = { titleMessage: '' };