import React from "react";
import { useParams } from "react-router";
import One from './resources/one.jpeg'
import Two from './resources/two.jpeg';
import Three from './resources/three.jpg';
import Ecom from './resources/ecom.png';
import Sone from './resources/sneakers/sone.jpg';
import Stwo from './resources/sneakers/stwo.jpg';
import Sthree from './resources/sneakers/sthree.jpeg';
import Bfour from './resources/heelboots/bfour.jpg';
import Bfive from './resources/heelboots/bfive.jpg';
import Bthree from './resources/heelboots/bthree.jpg';

function Allshoes(){
    let shoes = [
        {
            id:4,
            image:Sone,
            alt: 'Brown sneaker',
            description: 'Comfortable',
            price: '3000/='
        },
        {
            id:5,
            image: Stwo,
            description: 'Comfort',
            price: '3500/=',
        },
        {
            id:6,
            image: Sthree,
            description: 'Comfort',
            price: '3500/=',
        },

        {
            id:7,
            image: One,
            description:'comfortable',
            price:'1200/='
        },
        {
            id:8,
            image: Two,
            description:'comfortable',
            price:'1500/='
        },
        {
            id:9,
            image: Three,
            description:'comfortable',
            price:'1800/='
        }
    ];
    let {id} = useParams()
    shoes = shoes.filter(function(item){
        return item.id == {id}
    }).map(items =>{
        return(
            <>
            <div>
                hey
                {items.price}
            </div>

            </>
        )
    })

    return(
        {shoes}
    )
    

}



export default function Productdetails(){
    let {id} = useParams()
    
    return(
        <>
        <div className ='productContainer'>
            <h3>Product Details {id}</h3>
            
        </div>
        </>
    )
}