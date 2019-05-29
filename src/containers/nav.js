import React from 'react';
import {Link} from 'react-router-dom';
export default (props) =>{
    return(
        <nav>
        <div className="branding">
            <Link to='/'>College Predictor</Link>
        </div>
        <div className="menu">
            <ul>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/" className="active">Get Started</Link></li>
            </ul>
        </div>
    </nav>
    )
}