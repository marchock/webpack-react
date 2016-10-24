import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './product-action';

class Product extends Component {

    render() {
        return (
            <div>
                <h1 style={this.props.product.color}>Product page</h1>
                <button onClick={() => this.props.actions.changeColor('red')} >RED</button>
                <button onClick={() => this.props.actions.changeColor('green')} >GREEN</button>
                <button onClick={() => this.props.actions.changeColor('blue')} >BLUE</button>
            </div>
        );
    }
};


// REDUX

// these are required mapStateToProps, mapDispatchToProps and connect


// bind data to the props
function mapStateToProps(state) {
    return {
        product: state.product,
    }
}

// bind actions to the props
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

// connect props and actions to the Home Class
export default connect(mapStateToProps, mapDispatchToProps)(Product);