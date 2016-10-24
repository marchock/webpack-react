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



                <a href="#" className="facebook" title="Facebook">
                    <svg className="share-icon icon-header-facebook">
                        <use xlinkHref="/svg/sprite.svg#icon-header-facebook"></use>
                    </svg>
                </a>
                <a href="#" className="twitter" title="Twitter">
                    <svg className="share-icon icon-header-twitter">
                        <use xlinkHref="/svg/sprite.svg#icon-header-twitter"></use>
                    </svg>
                </a>
                <a href="#" className="google" title="Google+" target="_blank">
                    <svg className="share-icon icon-header-gplus">
                        <use xlinkHref="/svg/sprite.svg#icon-header-gplus"></use>
                    </svg>
                </a>
                <a href="#" className="email" target="_blank" title="Email" >
                    <svg className="share-icon icon-header-mail">
                        <use xlinkHref="/svg/sprite.svg#icon-header-mail"></use>
                    </svg>
                </a>



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