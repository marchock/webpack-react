import React, { Component } from 'react';

export default class Message extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        console.log('Message: ', this.props.subMessage)
        this.props.onDelete(this.props.subMessage);
    }

    render() {
        return (
            <div>
                {this.props.subMessage}
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}
Message.propTypes = { subMessage: React.PropTypes.string.isRequired };
Message.defaultProps = { subMessage: '' };