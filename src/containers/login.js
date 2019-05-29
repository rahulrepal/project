import React from 'react'
import {Link} from 'react-router-dom';
export default (props) =>{

    return(
        <div className="login">
        <section className="form">
            <h1>Login</h1>
            <div className="form_input_group">
                <label for="fname"> EMAIL </label>
                <input type="text"/> 
            </div>
            
            <div className="form_input_group">
                    <label> PASSWORD </label>
                    <input type="text" /> 
                </div>
                <p className="info"> Don't Have An Accout <Link to='/register' className="text_blue">Register Here</Link></p>
        </section>
        <section className="login_info">
            <h1>Why You Should Login</h1>
            <p>If you are going to use this application more than once then you should consider logging in as it will save all your details and you won't need to give input again and again.</p>
        </section>
    </div>
    )
}