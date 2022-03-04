import React, { Component } from 'react';
import Top from './Top';
import Product from './Products';
import Footer from './store/Footer'

class Home extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <>
                <Top/>
                <Product />
                <Footer/>
            </>
        )
    }

}

export default Home;