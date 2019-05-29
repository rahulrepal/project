import React,{Component} from 'react'
import qs from 'querystring'
import axios from 'axios'
import College from '../components/college'
 class list extends Component{

    state={
        caste:'',
        gender:'',
        university:'',
        merit:'',
        department:'',
        colleges:[]
    }

    componentDidMount(){
        const userDetails = qs.parse(this.props.location.search)
        const {caste , gender , university , merit ,department} =userDetails;
        this.setState({
            caste,
            gender,
            university,
            merit,
            department
        })

        const userdata={
            caste,
            university,
            department,
            merit,
            gender
        }
        axios.post('https://stores-rest-api-22.herokuapp.com/collegedata',userdata,{headers:{'Content-Type': 'application/json; charset=utf-8'}})
        .then( res =>{ 
            const stringColleges = JSON.stringify(res.data.data)
            this.setState({colleges:JSON.parse(JSON.parse(JSON.stringify(res.data.data)))})
         
            console.log(JSON.parse(JSON.parse(JSON.stringify(res.data.data))))
        })
        .catch(err => console.log(err)) 
    }
    
    onChangeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        const {caste , gender , university , merit ,department} =this.state;
        const userdata={
            caste,
            university,
            department,
            merit,
            gender
        }
        axios.post('https://stores-rest-api-22.herokuapp.com/collegedata',userdata,{headers:{'Content-Type': 'application/json; charset=utf-8'}})
        .then( res =>{ 
            const stringColleges = JSON.stringify(res.data.data)
            this.setState({colleges:JSON.parse(JSON.parse(JSON.stringify(res.data.data)))})
         
            console.log(JSON.parse(JSON.parse(JSON.stringify(res.data.data))))
        })
        .catch(err => console.log(err)) 
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
        const userDetails = qs.parse(this.props.location.search)
        return(
            <div>

                <div className="filter">
                <div className="form_group">
                      
                            <div className="input_group">
                                <label> Department </label>
                                 <select name="department" value={this.state.department} onChange={this.onChangeHandler}>
                                        <option>Select Department</option>
                                        {branches}
                                    </select>
                              
                            </div>
                            <div className="input_group">
                                            <label for="merit"> Merit No. </label>
                                            <input type="text" id="merit" value={this.state.merit} name="merit" placeholder="ex. 30000" onChange={this.onChangeHandler}/>
                                           
                                    </div>
                            <div className="input_group">
                                    <label> Gender</label>
                                    <select name="gender" value={this.state.gender} onChange={this.onChangeHandler}>
                                    <option>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                         
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
                                       
                                    </div>
                                
                                <div className="input_group">
                                        <label> university</label>
                                        <select name="university" value={this.state.university} onChange={this.onChangeHandler}>
                                        <option>Select university</option>
                                            <option value="home">Home </option>
                                            <option value="other">Other than Home</option>
                                        </select>
                                      
                                    </div>
                            
                    </div>
                </div>
                <ul>
                {
                    this.state.colleges.map( college => (
                        <College
                        details={college}
                        />
                    ))
                }
                </ul>
            </div>
        )
    }
}

export default list;