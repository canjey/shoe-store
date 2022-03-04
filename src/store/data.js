import React from "react";

export default function data (){
    const categories = [
        {
            id: 1,
            name: "Stilletto",
        },
        {
            id: 2,
            name: "maleofficial",
        },
        {
            id: 3,
            name: 'femaleofficial',
        },
        {
            id:4,
            name : 'maleSneakers'
        },
        {
            id:5,
            name: 'femaleSneakers',
        },
        {
            id: 6,
            name: 'babyShoes',
        },
        {
            id: 7,
            name: 'slippers'
        }

    ];
    const shoes = categories;
    if (shoes.id === 1 ){
        let stilletto = [
            {
                s_id: 7,
                image: One,
                description: 'comfortable',
                price: '1200/='
            },
            {
                s_id: 8,
                image: Two,
                description: 'comfortable',
                price: '1500/='
            },
            {
                s_id: 9,
                image: Three,
                description: 'comfortable',
                price: '1800/='
            }
        ];
    }
    return(
        <>
        {categories},
        
        </>

    )
}