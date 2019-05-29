import React,{Component} from 'react'
import Sidebar from '../components/sidebar'
import {Link} from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import qs from 'querystring';
class Details extends Component{



    state={
        fname:'',
        lname:'',
        department:'',
        gender:'',
        twfs:false,
        dfws:false,
        caste:'',
        university:'',
        merti:''

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

        let userDetails=this.state;
        let searchString=qs.stringify(userDetails)
        if (this.validator.allValid()) {
            this.props.history.push({
                pathname:'/list',
                search:searchString
            })
          } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            this.forceUpdate();
          }
    }
    
    




    render(){

       const branchNames = ['Computer Engineering', ' Information Technology',
    'Electronics and Telecommunication Engg', 'Mechanical Engineering',
    'Civil Engineering', 'Electrical Engineering',
    'Computer Engineering [Second Shift]',
    'Information Technology [Second Shift]',
    'Electrical Engineering [Second Shift]',
    'Mechanical Engineering [Second Shift]', 'Information Technology',
    'Civil Engineering [Second Shift]',
    'Electronics and Telecommunication Engg [Second Shift]',
    ' Bio Technology', 'Chemical Engineering',
    'Production Engineering', 'Computer Engineering [Second Shift',
    'Instrumentation Engineering', 'Production Engineering[Sandwich]',
    'Printing Engineering and Graphics Communication',
    'Mechanical Engineering[Sandwich]', 'Automobile Engineering',
    ' Electronics and Telecommunication Engg', ' Computer Engineering']

    const branches = branchNames.map( branch => (
        <option value={branch}>{branch} </option>
    ))
        return(
            <div className="myForm">
            <section className="form">
                <Link to="/" className="link"> Go Back</Link>
                <h1>Fill In Your Details</h1>
                <form>
                    <div className="form_group">
                        <div className="input_group">
                            <label for="fname"> First Name </label>
                            <input type="text" id="fname" value={this.state.fname} name="fname" placeholder="John" onChange={this.onChangeHandler}/>
                            {this.validator.message('First Name',this.state.fname,'required|min:3|max:10')} 
                        </div>
                        
                        
                        <div className="input_group">
                                <label> Last Name </label>
                                <input type="text" value={this.state.lname} name="lname" placeholder="Doe" onChange={this.onChangeHandler}/> 
                                {this.validator.message('Last Name',this.state.lname,'required|min:3|max:10')}
                            </div>
                    </div>
    
                    <div className="form_group">
                            <div className="input_group">
                                <label> Department </label>
                                 <select name="department" value={this.state.department} onChange={this.onChangeHandler}>
                                        <option>Select Department</option>
                                        {branches}
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
                                            <label for="merit"> Merit No. </label>
                                            <input type="text" id="fname" value={this.state.merit} name="merit" placeholder="ex. 30000" onChange={this.onChangeHandler}/>
                                            {this.validator.message('First Name',this.state.merit,'required')} 
                                    </div>
                                <div className="input_group">
                                        <label> Caste</label>
                                        <select name="caste" value={this.state.caste} onChange={this.onChangeHandler}>
                                        <option>Select Caste</option>
                                            <option value="OPEN">OPEN</option>
                                            <option value="OBC">OBC</option>
                                            <option value="ST">ST</option>
                                            <option value="SC">SC</option>
                                            <option value="VJ">VJ</option>
                                            <option value="NT1">NT1</option>
                                            <option value="NT2">NT2</option>
                                            <option value="NT3">NT3</option>

                                        </select>
                                        {this.validator.message('Caste',this.state.caste,'required')}
                                    </div>
                                
                                <div className="input_group">
                                        <label> university</label>
                                        <select name="university" value={this.state.university} onChange={this.onChangeHandler}>
                                        <option>Select university</option>
                                            <option value="home">Home </option>
                                            <option value="other">Other than Home</option>
                                        </select>
                                        {this.validator.message('university',this.state.university,'required')}
                                    </div>
                            </div> 
                            <div className="form_group">
                                    <div className="input_group">
                                            <label className="iLabel"> TWFS</label>
                                            <input type="checkbox" name="twfs" checked={this.state.twfs} onChange={this.onChangeCheckBoxHandler}/>
                                        </div>
                                    
                                    <div className="input_group">
                                            
                                            <label className="iLabel" > DEFENCE</label>
                                            <input type="checkbox" name="dfws" checked={this.state.dfws} onChange={this.onChangeCheckBoxHandler}/>
                                        </div>
                                </div> 
                            <input type="submit" value="submit" className="button_blue" onClick={this.onSubmitHandler} />
                            <p className="info">Don't worry we wont share any of your information.</p>
                </form>
            </section>
            <Sidebar />
        </div>
        )
    }
}

export default Details;