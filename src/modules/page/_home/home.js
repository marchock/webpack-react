import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './home-action';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    testFunction(exampleNumber) {
        this.props.actions.testAction(exampleNumber);
    }

    render() {

        console.log('sdfsfsdfds', this.props);

        return (
            <div>
                <h1>Home page</h1>
                <button onClick={() => this.testFunction(12)} >Click me</button>

                <p>{this.props.home.exampleData}</p>
            </div>
        );
    }
};


function mapStateToProps(state) {
    return {
        home: state.home,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);