import React from "react";
import Suede from '../resources/blogs/suede.jpg';
import Polish from '../resources/blogs/polish.jfif';
import '../App.css'

export default function Blogs() {
    return (
        <>
            <div className="blogContainer">
                <div>
                    <h3 id="title"> Products to use </h3>
                    <div class="blogs">
                        <div>
                            <a href = "#" > <img src={Suede} style={{ width:'150px'}} /></a>
                        </div>
                        <div>
                            <h3>Kiwi</h3>
                            <p>
                            <p>Specially formulated to revive and restore the original colour of suede leather</p>
                            <button style={{ width:'150px'}}> Shop Suede</button>
                                
                            </p>
                        </div>

                    </div>
                    <div class="blogs">
                        
                        
                        <div>
                            <a href = "#" > <img src={Polish} style={{ width:'150px'}} /></a>
                        </div>
                        <div>
                            <p>
                                <h3 id = "title"> Take Care of your Shoes</h3>
                                <p>With the right shoe polish at hand, you get to protect your shoes and give them a good classy look each morning</p>
                                <button style={{ width:'150px'}}> Shop Kiwi</button>
                                
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}