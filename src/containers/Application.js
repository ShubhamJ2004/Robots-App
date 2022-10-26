import React, { Component } from 'react';
import Cardlist from './Cardlist';
// import { robots } from './robots';
import Searchbox from './Searchbox';
import Scroll from "./Scroll";
import './Application.css';
class Application extends Component{
    constructor(){
        super()
        this.state = {
            robots : [],
            searchfield : ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json();
        })
        .then(users=> {this.setState({robots: users})});

    } 
    onSearchChange = (event) =>{
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const filterdRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1>LODING...</h1>
        }
         else{
            return(
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <Searchbox serachChange={this.onSearchChange}/>
                    <Scroll>
                        <Cardlist robots = {filterdRobots}/>
                    </Scroll>
                </div>
            );
                
        }
    }
}
export default Application;
