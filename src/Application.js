import React, { Component } from 'react';
import Cardlist from '../src/components/Cardlist';
// import { robots } from './robots';
import Searchbox from '../src/components/Searchbox';
import Scroll from "../src/components/Scroll";
import './containers/Application.css';
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
        const {robots, searchfield} = this.state;
        const filterdRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if(!robots.length){
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
