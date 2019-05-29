import React from 'react'
import {Link} from 'react-router-dom';
export default (props) =>{

    return(
        <section className="sidebar">
                <article>
                        <h3>Why You Should Login</h3>
                        <p>If you are going to use this application more than once then you should consider logging in as it will save all your details and you won't need to give input again and again</p>
                        <Link to="/login" className="loginlink">Login</Link>
                </article>
            <article className="bg_blue">
                <h3>How It Works</h3>
                <p>This application uses Time Series Analysis to predict the future cut off colleges.Time series analysis comprises methods for analyzing time series data in order to extract meaningful statistics and other characteristics of the data</p>
                <a href="#" className="clink">Read More</a>
            </article>
    
        </section>
    )
}