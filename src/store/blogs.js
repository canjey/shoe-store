import React from "react";
import Tips from '../resources/blogs/tips1.jfif';
import Tips1 from '../resources/blogs/tips2.jfif';
import '../App.css'

export default function Blogs() {
    return (
        <>
            <div className="blogContainer">
                <div>
                    <p id="title"> Blogs </p>
                    <div class="blogs">
                        <div>
                            <a href = "https://icanmakeshoes.com/top-tips-to-care-for-your-shoes/" > <img src={Tips} /></a>
                        </div>
                        <div>
                            <p>
                                1. Shoes too big?

                                “What are insoles?” you may ask. An insole is a soft pad (usually made from a foam, gel or leather material), which you place inside your shoes to provide support, cushioning and even warmth for your feet...

                                
                            </p>
                        </div>

                    </div>
                    <div class="blogs">
                        
                        
                        <div>
                            <a href = "https://www.marthastewart.com/1136215/how-take-care-your-shoes-keep-looking-new" > <img src={Tips1} /></a>
                        </div>
                        <div>
                            <p>
                            How to Take Care of Your Shoes and Keep Them Looking Like New
                                
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}