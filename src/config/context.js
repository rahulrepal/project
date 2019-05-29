import React,{Component} from 'react'

const Context = React.createContext();
const Reducer =(state,action)=>{
    switch(action.type){

        default:
        return state;
    }
}

export class Provider extends Component{
    state={
        islogin:false,
        dispatch:
        (action)=>{
            this.setState(state=>Reducer(state,action))
        }
    }

    render(){

        return(
            <Context.Provider
            value={this.state}
            >

            </Context.Provider>
        )
    }    
}

export const Consumer = Context.Consumer;