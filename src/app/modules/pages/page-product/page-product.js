import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './page-product-action';
import Slider from 'react-slick';

//https://github.com/akiran/react-slick


class PageProduct extends Component {

    render() {

        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3
        };




        return (
            <div>
                <h1 style={this.props.product.color}>Product page</h1>
                <button onClick={() => this.props.actions.changeColor('red')} >RED</button>
                <button onClick={() => this.props.actions.changeColor('green')} >GREEN</button>
                <button onClick={() => this.props.actions.changeColor('blue')} >BLUE</button>


            <Slider {...settings}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>6</h3></div>
                  </Slider>



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
export default connect(mapStateToProps, mapDispatchToProps)(PageProduct);