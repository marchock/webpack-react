import React, { Component, LinkedStateMixin } from 'react';
import linkState from 'react-link-state';
import Header from '../../component/common/header/header';
import Footer from '../../component/common/footer/footer';
import Message from './message.js';


export default class Home extends Component {

    constructor(props) {
        super(props);

        //https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html#how-state-works
        // ES6
        //https://facebook.github.io/react/docs/reusable-components.html
        this.state = {
            message: 'Hello World!',
            isVisible: true,
            subMessages: [
                'This is a message 1',
                'This is a message 2',
                'This is a message 3'
            ]
        };
        // es6 bind events to keep "this" available
        this.handleAdd = this.handleAdd.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
        console.log('Home', this)
        console.log('linkState', linkState) // TODO: 
    }

    deleteMessage(message) {
        var newMessages = this.state.subMessages.filter((string) => {
            if (string !== message) {
                return string;
            }
        });

        this.setState({
            subMessages: newMessages
        })
    }

    handleAdd (e) {
        var newMessage = 'ANOTHER MESSAGE';
        var newMessages = this.state.subMessages.concat([newMessage]);

        // https://facebook.github.io/react/docs/component-api.html#setstate
        this.setState({
            subMessages: newMessages
        })
    }

    render() {

        var inlineStyles = {
            display: this.state.isVisible ? 'block' : 'none'
        }

        var message = 'this is a header';

        var subMessages = this.state.subMessages.map((string) => {
            return <Message subMessage={string} onDelete={this.deleteMessage} />
        });

        /*React element can only return one element*/
        return (
            <div>
                <Header titleMessage ={message} />
                <h1 style={inlineStyles}>{this.state.message}</h1>
                <p>This is it</p>
                {subMessages}
                <button onClick={this.handleAdd}>ADD</button>
                <Footer titleMessage ={this.props.titleMessage} />
            </div>
        );
    }
};


// Home.defaultProps = { message: 'This is a title message for header' };

