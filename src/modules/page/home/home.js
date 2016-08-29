import React, { Component } from 'react';
import Header from '../../component/common/header/header';
import Footer from '../../component/common/footer/footer';

export default class App extends Component {
  render() {
    /*React element can only return one element*/
    return (
        <div>
        <Header />
        <h1>HOME PAGE........</h1>
        <Footer />
        </div>
    );
  }
}


// // Correct!
// return (  
//     [<Comp1 />,
//     <Comp2 />]
// )