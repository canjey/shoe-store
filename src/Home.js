import React, { Component } from 'react';
import Top from './Top';
import Product from './Products';
import Footer from './store/Footer'
import './App.css';

class Home extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <>
            <body style={{ color: '#4c4a37',
  fontFamily: 'Source Sans Pro sans-serif', fontSize: '18px', lineHeight: '32px', margin: '0 0 24px'}}>
                <Top/>
                <Product />
                <Footer/>
            </body>
            </>
        )
    }

}

export default Home;