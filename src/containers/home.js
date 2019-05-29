import React from 'react';

import {Link} from 'react-router-dom';
export default (props) =>{
    return(
            <main>
                <section className="image">
                    <img src="static/asset/hero.png" />
                </section>
        <section className="text">
            <article>
            <h1>College <span className="text_blue">Predictor</span></h1>
            <p>Select your future college more wisely 
                and with our analytics hassle free.
                Central Admisssion Process Made Easy.</p>
            <Link to="/details" className="button_blue">Get Started</Link>
        </article>
        </section>
    
    </main>
    )
}