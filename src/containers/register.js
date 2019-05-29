import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import qs from 'querystring';
import axios from 'axios';
class Register extends Component{

    state={
        fname:'',
        lname:'',
        email:'',
        password:'',
        caste:'',
        gender:'',
        university:'',
        twfs:false,
        department:'',
        
        
        defence:false,
        merit:''
     
        

    }
          validator = new SimpleReactValidator();
    
    onChangeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onChangeCheckBoxHandler=(e)=>{
        this.setState({[e.target.name]:e.target.checked})
    }
    onSubmitHandler=(e)=>{
        e.preventDefault();

       // let searchString=qs.stringify(userDetails)
        if (this.validator.allValid()) {
            let config={headers:{
                'Content-Type': 'application/json; charset=utf-8',
                
                }
            }
            
        const userDetails={
            fname:this.state.fname,
            lname:this.state.lname,
            username:this.state.email,
            password:this.state.password,
            caste:this.state.caste,
            gender:this.state.gender,
            university:this.state.university,
            tfws:"yes",
            department:this.state.department,
            defence:"yes",
            merit:this.state.merit
        }
        const newUser = qs.stringify(userDetails)
            axios.post('https://stores-rest-api-22.herokuapp.com/register',userDetails,config)
            .then((res)=>{
                console.log(res)
                this.props.history.push({
                    pathname:'/login',
                    
                })})
                .catch(err=>{
                    if(err.response.status==400)
                    alert("User Already Exists (400 BAD REQUEST)")
                })
          } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            this.forceUpdate();
          }
    }


   render(){
    return(
        <div className="register">
        <section className="form">

            <h1>Register</h1>
            <form>
                    <div className="form_group">
                        <div className="input_group">
                            <label for="fname"> First Name </label>
                            <input type="text" id="fname" value={this.state.fname} name="fname" onChange={this.onChangeHandler}/>
                            {this.validator.message('First Name',this.state.fname,'required|min:3|max:10')} 
                        </div>
                        
                        
                        <div className="input_group">
                                <label> Last Name </label>
                                <input type="text" value={this.state.lname} name="lname" onChange={this.onChangeHandler}/> 
                                {this.validator.message('Last Name',this.state.lname,'required|min:3|max:10')}
                            </div>
                    </div>

                    <div className="form_group">
                        <div className="input_group">
                            <label for="fname"> Email </label>
                            <input type="text" id="email" value={this.state.email} name="email" onChange={this.onChangeHandler}/>
                            {this.validator.message('First Name',this.state.email,'required|email')} 
                        </div>
                        
                        
                        <div className="input_group">
                                <label>Password</label>
                                <input type="text" value={this.state.password} name="password" onChange={this.onChangeHandler}/> 
                                {this.validator.message('Last Name',this.state.password,'required|min:5|max:12')}
                            </div>
                    </div>
    
                    <div className="form_group">
                            <div className="input_group">
                                <label> Department </label>
                                 <select name="department" value={this.state.department} onChange={this.onChangeHandler}>
                                        <option>Select Department</option>
                                        <option value="computer">Computer</option>
                                        <option value="electronics">Electronics</option>
                                    </select>
                                    {this.validator.message('Department',this.state.department,'required')}
                            </div>
                            
                            <div className="input_group">
                                    <label> Gender</label>
                                    <select name="gender" value={this.state.gender} onChange={this.onChangeHandler}>
                                    <option>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    {this.validator.message('Gender',this.state.gender,'required')}
                                </div>
                        </div> 
                        
    
                        <div className="form_group">
                                <div className="input_group">
                                        <label> Caste</label>
                                        <select name="caste" value={this.state.caste} onChange={this.onChangeHandler}>
                                        <option>Select Caste</option>
                                            <option value="general">General</option>
                                            <option value="obc">OBC</option>
                                        </select>
                                        {this.validator.message('Caste',this.state.caste,'required')}
                                    </div>
                                
                                <div className="input_group">
                                        <label> University</label>
                                        <select name="university" value={this.state.university} onChange={this.onChangeHandler}>
                                        <option>Select Univ</option>
                                            <option value="home">Home </option>
                                            <option value="other">Other than Home</option>
                                        </select>
                                        {this.validator.message('University',this.state.university,'required')}
                                    </div>
                            </div> 
                            <div className="form_group">
                             
                                    <div className="input_group">
                                            <label for="merit"> Merit No. </label>
                                            <input type="text" id="fname" value={this.state.merit} name="merit" onChange={this.onChangeHandler}/>
                                            {this.validator.message('First Name',this.state.merit,'required')} 
                                    </div>

                                    <div className="input_group">
                                            <label className="iLabel"> TWFS</label>
                                            <input type="checkbox" name="twfs" checked={this.state.twfs} onChange={this.onChangeCheckBoxHandler}/>
                                        </div>
                                    
                                    <div className="input_group">
                                            
                                            <label className="iLabel" > DEFENCE</label>
                                            <input type="checkbox" name="defence" checked={this.state.defence} onChange={this.onChangeCheckBoxHandler}/>
                                        </div>
                                </div> 
                            <input type="submit" value="submit" className="button_blue" onClick={this.onSubmitHandler} />
                            <p class="info"> Alreadty Have an Account <Link to='/login' class="text_blue">Login</Link></p>            </form>

            
        </section>
      
    </div>
    )
   }
}

export default Register;