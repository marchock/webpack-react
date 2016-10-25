// CSS
require('./home.css');

// JS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './home-action';


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log('sdfsfsdfds', this.props);

        return (
            <div>
                <h1>Home page</h1>
                <button onClick={() => this.props.actions.increment(this.props.home.counter)} >Increment</button>
                <button onClick={() => this.props.actions.decrement(this.props.home.counter)} >Decrement</button>
                <p>{this.props.home.counter}</p>
            </div>
        );
    }
};


// REDUX

// these are required mapStateToProps, mapDispatchToProps and connect


// bind data to the props
function mapStateToProps(state) {
    return {
        home: state.home,
    }
}

// bind actions to the props
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

// connect props and actions to the Home Class
export default connect(mapStateToProps, mapDispatchToProps)(Home);