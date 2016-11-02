// CSS
require('./page-home.css');

// JS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './page-home-action';


class PageHome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <div className="grid">
                    <div className="col-1-1">
                        <h1>Home page.....</h1>
                        <button onClick={() => this.props.actions.increment(this.props.home.counter)} >Increment</button>
                        <button onClick={() => this.props.actions.decrement(this.props.home.counter)} >Decrement</button>
                        <p>{this.props.home.counter}</p>
                    </div>
                </div>
            </section>
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
export default connect(mapStateToProps, mapDispatchToProps)(PageHome);



