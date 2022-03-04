import React, { useState } from "react";
import './App.css';
import One from './resources/one.jpeg'
import Two from './resources/two.jpeg';
import Three from './resources/three.jpg';
import Ecom from './resources/ecom.png';
import Hone from './resources/hone.jpg';
import Htwo from './resources/htwo.jpg';
import Hthree from './resources/hthree.jpg';
import Hfour from './resources/hfour.jpg'
import Sone from './resources/sneakers/sone.jpg';
import Stwo from './resources/sneakers/stwo.jpg';
import Sthree from './resources/sneakers/sthree.jpeg';
import Bfour from './resources/heelboots/bfour.jpg';
import Bfive from './resources/heelboots/bfive.jpg';
import Bthree from './resources/heelboots/bthree.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Blogs from './store/blogs'
import Shoelace from './resources/shoelace.jpg';
import { BrowserRouter, Link, useParams, Route, Routes } from 'react-router-dom'



function TopImage() {
    const data = [
        {
            image: One,
            caption: "Caption",
            description: "desc",
            alt:'Stilletto',
        },
        {
            image: Two,
            caption: 'Caption',
            desciption: 'desc',
            alt:'Boots',
        },
        {
            image: Three,
            caption: 'Caption',
            desciption: 'desc',
            alt:'Sneakers',
        }
    ];
    

    return (
        <>

        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-10"
                    src={Hone}
                    alt="First slide"
                    style = {{width:'400px'}}
                />
                <Carousel.Caption>
                    <h5>Get Comfortable in your morning runs</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-10"
                    src={Hfour}
                    alt="Second slide"
                    style = {{width:'400px', padding: '20px'}}
                />
                <Carousel.Caption>
                    <h5>Planing for a hike</h5>
                    <p>Buy a comfortable shoe to climb the hills</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-10"
                    src={Hthree}
                    alt="Third slide"
                    style = {{width:'400px'}}
                />
                <Carousel.Caption>
                    <h5>Dinner wears are not complete without a classy shoe</h5>
                    <p>Purchase a matching shoe with your dinner wear</p>
                </Carousel.Caption>
            </Carousel.Item>
              
        </Carousel>
        <button class ='btn' style ={{
            height: '50px', width: '150px', borderStyle:'None',
            backgroundColor:'black', color:'antiquewhite'

              }}>Shop Now</button>
              </>


    )

}

function Sneakers(props) {
    const image = < Sone />;
    const shoes = [
        {
            id: 4,
            image: Sone,
            alt: 'Brown sneaker',
            description: 'Comfortable',
            price: '3000/='
        },
        {
            id: 5,
            image: Stwo,
            description: 'Comfort',
            price: '3500/=',
        },
        {
            id: 6,
            image: Sthree,
            description: 'Comfort',
            price: '3500/=',
        }

    ];

    const sneakersList = shoes.map(items => {
        return (
            <>
                <div>
                    <div className="imageContainer">
                        <Link to="/">
                            <img className='imagecontainer' src={items.image} alt={items.alt} style={{
                                width: '200px', height:'200px', borderRadius: '10px'
                            }} />
                        </Link>
                        <p>
                            {items.price}
                        </p>
                        <button className='shop-btn'> Add to Cart |<img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-cart-shopping-actions-those-icons-lineal-those-icons-3.png"/></button>
                    </div>


                </div>

            </>
        )
    })


    return (
        <>
            <div className="sneakersContainer">
                <h3 id = "title" style={{ textAlign: 'center' }}><u>Sneakers</u></h3>
                <div class="container2">
                    {sneakersList}
                </div>
            </div>
        </>
    )


}
function Stilleto() {
    const stilletto = [
        {
            id: 7,
            image: One,
            description: 'comfortable',
            price: '1200/='
        },
        {
            id: 8,
            image: Two,
            description: 'comfortable',
            price: '1500/='
        },
        {
            id: 9,
            image: Three,
            description: 'comfortable',
            price: '1800/='
        }
    ];

    const listStilletto = stilletto.map(items => {
        return (
            <>
                <div className="imageContainer">
                    <img className='imagecontainer' src={items.image} alt={items.alt} style={{
                        width: '200px',  borderRadius: '10px'
                    }} />
                    <p>
                        {items.price}
                    </p>
                    <button className='shop-btn'> Add to Cart <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-cart-shopping-actions-those-icons-lineal-those-icons-3.png"/></button>
                </div>
            </>
        )
    })
    return (
        <>
            <div className="stillcontainer">
                <div class='container2'>
                    {listStilletto}
                </div>
            </div>
        </>
    )
}

function HeelBoots() {

    const heels = [
        {
            id: 1,
            image: Bthree,
            price: '2000/=',

        },
        {
            id: 2,
            image: Bfour,
            description: 'Comfort',
            price: '3500/=',
        },
        {
            id: 3,
            image: Bfive,
            description: 'Comfort',
            price: '3500/=',
        },
    ];
    let { id } = useParams();
    const listBoots = heels.map(items => {

        return (
            <>
                <div className="imageContainer">
                    <nav>
                        <Link to={`/productdetails/${items.id}`}>
                            <img className='imagecontainer' src={items.image} alt={items.alt} style={{
                                width: '200px', height:'200px', borderRadius: '10px'
                            }} />
                        </Link>
                    </nav>
                    <p>
                        {items.price}
                    </p>
                    <button className='shop-btn'> Add to Cart | <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-cart-shopping-actions-those-icons-lineal-those-icons-3.png"/></button>
                </div>
            </>
        )
    })

    return (
        <>
            <div class="heelContainer">
                <h3 id = "title" style={{ textAlign: 'center' }}><u> HeelBoots</u></h3>
                <div class='container2'>
                    {listBoots}
                </div>
            </div>
        </>
    )
}

function ShoeLaces(){
    const laces = [

    ];
    return(
        <>
        <body style={{ color: '#4c4a37',
  fontFamily: 'Source Sans Pro sans-serif', fontSize: '18px', lineHeight: '32px', margin: '0 0 24px'}}>
        <h3 id ='title'>Other Shoe Neccessities</h3>
        <div className ="shoelace" style={{ display:'flex', marginLeft:'100px'}}>
            <div class ="imageshoelace">
                <img src={Shoelace}  style ={{width:'200px'}}/>

            </div>
            <div style={{marginLeft:'20px'}}>
                <h3 id ='title'>Laces</h3>
                <p>
                    
                    Get all type of laces that can go well with your shoes 
                </p>
            </div>
        </div>
        </body>
        </>
    )
}

function Categories(){
    return(
        <>
        <div className="categories">
            <h3 id = 'title'>Shop by categories</h3>
            <div className="categories_container">
               
            <div>
                <img id = "categories" src="https://img.icons8.com/ios-filled/50/000000/mens-shoe.png"/>
            </div>
            <div>
            <img id = "categories" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-shoes-baby-shower-flatart-icons-outline-flatarticons.png"/>
            </div>
            <div>
            <img id = "categories" src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/50/000000/external-shoes-magic-and-fairy-tale-icongeek26-outline-gradient-icongeek26.png"/>
            </div>
            <div>
            <img id = "categories" src="https://img.icons8.com/external-konkapp-outline-color-konkapp/50/000000/external-shoes-soccer-konkapp-outline-color-konkapp.png"/>
            </div>
            <div>
            <img id = "categories" src="https://img.icons8.com/external-fill-outline-pongsakorn-tan/50/000000/external-sandals-summer-fill-outline-pongsakorn-tan.png"/>
            </div>
            </div>
        </div>
        </>
    )
}
export default function Product() {


    return (
        <>
            <TopImage />
            <div className = "productContainer" style ={{ padding:'20px', marginLeft:'20px'}}>
                <Categories />
                <Stilleto />
                <Sneakers />
                <HeelBoots />
                <ShoeLaces/>
                <Blogs />
            </div>

        </>
    )

}