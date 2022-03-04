import React from "react";
import '../App.css';
import Pana from '../resources/pana.png'

export default function Footer(){
  const details =[
    {
    row: 'About',

    }
  ]
  return(
    <>
    <div class = "footercontainer">
      <h4 style ={{ textAlign:'center', fontFamily: 'fantasy'}} > Shoe Store</h4>
    
    <div className="footercontainer1" style ={{ display:'flex', justifyContent:'space-around'}}>
      <div>
      <img src = { Pana } style = {{ width:'200px'}} />

      
      </div>

      <div>
        <h3 id = "title">Address</h3>
        <p>
        <img src="https://img.icons8.com/material-rounded/24/000000/marker.png"/>1234 Nairobi, Kenya
        </p>
      </div>
      <div>
        <h3 id = "title">Contacts</h3>
        <p>
        <img src="https://img.icons8.com/external-nawicon-glyph-nawicon/32/000000/external-email-communication-nawicon-glyph-nawicon.png"/>Email: shoestore@gmail.com
        </p>
        <p style={{marginTop :'-20px'}}>
        <img src="https://img.icons8.com/windows/32/000000/phone.png"/>Phone: +2547111234
      </p>
      </div>
      <div>
        <h3 id = "title">
          Follow Us
        </h3>
        <img src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png"/>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png"/>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"/>
      </div>
    </div>
    <p style={{ borderTop:'groove', marginLeft:'10px', fontSize:'10px', fontFamily:'sans-serif', textAlign:'center'}}>
    <img style ={{}}src="https://img.icons8.com/material-outlined/24/000000/copyright.png"/>
    copyright 2022 Shoe Store - reserved
    </p>
    </div>
    
    
    </>
  )
}